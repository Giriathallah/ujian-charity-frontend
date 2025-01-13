import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DonationForm from "../components/formDonation";

const EditDonationPage = () => {
  const [donationData, setDonationData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/donation/${id}`
        );
        const data = await response.json();
        setDonationData(data);
      } catch (error) {
        console.error("Error fetching donation data:", error);
        navigate("/admin");
      }
    };

    fetchDonation();
  }, [id, navigate]);

  if (!donationData) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-center h-full container md:w-1/2 mx-auto bg-gray-100">
      <DonationForm donationData={donationData.donation} />
    </div>
  );
};

export default EditDonationPage;
