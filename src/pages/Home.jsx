import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function App() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/donation`
        );
        if (response.ok) {
          const data = await response.json();
          setDonations(data);
        } else {
          console.error("Failed to fetch donations");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchDonations();
  }, []);

  console.log(donations);

  const handleDonate = (donationTitle) => {
    Swal.fire({
      title: "Confirm Donation",
      text: `Are you sure you want to donate to "${donationTitle}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Donate!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Thank You!",
          text: "Your donation has been confirmed.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className=" container mx-auto mt-20 px-5 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
          Donasi hari ini
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-5 text-center">
          Rezeki kamu akan berkah dan diberikan kecukupan, ketika kamu mencoba
          untuk menyisihkan sebagian harta kamu buat mereka yang membutuhkan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mb-10">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              <img
                className="object-cover w-full h-64"
                src={`${import.meta.env.VITE_IMAGE_URL}/${donation.image_path}`}
                alt={donation.title}
              />
              <div className="p-6">
                <div>
                  <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                    {donation.category}
                  </span>
                  <Link
                    to={`/details/${donation.id}`}
                    className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                  >
                    {donation.title}
                  </Link>
                  <p className="mt-2 text-sm truncate text-gray-600 dark:text-gray-400">
                    {donation.description}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="ml-2 font-semibold text-gray-700 dark:text-gray-200">
                        Post By: {donation.created_by || "Admin"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDonate(donation.title)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
