/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const DonationForm = ({ donationData = null }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    target_amount: "",
    collected_amount: "",
    start_date: "",
    end_date: "",
    category: "",
  });
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (donationData) {
      setFormData({
        title: donationData.title || "",
        description: donationData.description || "",
        target_amount: donationData.target_amount || "",
        collected_amount: donationData.collected_amount || "",
        start_date: formatDate(donationData.start_date),
        end_date: formatDate(donationData.end_date),
        category: donationData.category || "",
      });
    }
  }, [donationData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = donationData
      ? `${import.meta.env.VITE_BACKEND_URL}/donation/edit/${id}`
      : `${import.meta.env.VITE_BACKEND_URL}/donation/add`;

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (image) {
      data.append("image", image);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        navigate("/admin");
      } else {
        console.error("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full flex flex-col">
      <Link
        to="/admin"
        className="w-fit px-6 py-3 bg-sky-600 text-white mb-6 inline-block rounded-lg"
      >
        Kembali
      </Link>
      <h1 className="text-2xl font-bold mb-6">
        {donationData ? "Edit" : "Add"} Donation
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Target Amount</label>
          <input
            type="number"
            name="target_amount"
            value={formData.target_amount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Collected Amount</label>
          <input
            type="number"
            name="collected_amount"
            value={formData.collected_amount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Start Date</label>
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">End Date</label>
          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {donationData ? "Update Donation" : "Add Donation"}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
