import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import { Link, useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [donations, setDonations] = useState([]);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !userId) {
      navigate("/login");
      return;
    }

    const fetchDonations = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/donation`
        );
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };
    fetchDonations();
  }, []);

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this donation?")) {
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/donation/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setDonations(donations.filter((donation) => donation.id !== id));
        alert("Donation deleted successfully.");
      } else {
        alert("Failed to delete donation.");
      }
    } catch (error) {
      console.error("Error deleting donation:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        onToggleCollapse={(isCollapsed) => setIsSidebarCollapsed(isCollapsed)}
      />

      <div
        className="flex-grow p-6 bg-gray-100 transition-all duration-300"
        style={{
          marginLeft: isSidebarCollapsed ? "4rem" : "16rem",
        }}
      >
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <Link
          to={"/add-donation"}
          className="px-4 py-2 bg-sky-600 text-white rounded-lg "
        >
          Add Donation
        </Link>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-5">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-300 text-left">
                  No
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left">
                  Nama Donasi
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left">
                  Target Donasi
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left">
                  Donasi Terkumpul
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr key={donation.id}>
                  <td className="px-4 py-2 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {donation.title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {formatRupiah(donation.target_amount.toLocaleString())}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {formatRupiah(donation.collected_amount.toLocaleString())}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 flex flex-col justify-center md:flex-row gap-2">
                    <Link
                      to={`/details-donation/${donation.id}`}
                      className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/edit-donation/${donation.id}`}
                      className="px-4 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(donation.id)}
                      className="px-4 py-1  text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
