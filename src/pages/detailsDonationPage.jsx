import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// ini halaman details buat di admin
const DetailsDonation = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/donation/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setDonation(data.donation);
        } else {
          console.error("Failed to fetch donation details");
        }
      } catch (error) {
        console.error("Error fetching donation data", error);
      }
    };

    fetchDonation();
  }, [id]);

  const formatDate = (date) => {
    if (!date) return "";

    const bulanIndonesia = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const d = new Date(date);
    const tanggal = d.getDate();
    const bulan = bulanIndonesia[d.getMonth()];
    const tahun = d.getFullYear();

    return `${tanggal} ${bulan} ${tahun}`;
  };

  if (!donation) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Link
        to="/admin"
        className="w-fit px-6 py-3 bg-sky-600 text-white mb-6 inline-block rounded-lg"
      >
        Kembali
      </Link>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white w-full md:w-1/2 mx-auto rounded-lg shadow-lg p-6 ">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}/${donation.image_path}`}
            alt={donation.title}
            className="w-full aspect-square object-cover rounded-lg mb-6"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{donation.title}</h1>
          <h3 className="text-lg text-gray-600 mb-4">
            {formatDate(donation.start_date)} - {formatDate(donation.end_date)}
          </h3>
          <h3 className="text-lg text-gray-600 mb-4">{donation.category}</h3>
          <p className="text-gray-700 mb-6">
            {donation.description || "Deskripsi tidak tersedia."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Target Amount</h2>
              <h1 className="text-2xl font-bold text-green-600">
                Rp.{donation.target_amount}
              </h1>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Collected Amount</h2>
              <h1 className="text-2xl font-bold text-red-600">
                Rp.{donation.collected_amount}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDonation;
