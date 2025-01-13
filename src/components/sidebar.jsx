/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { RiExchangeFundsFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onToggleCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    onToggleCollapse(!isCollapsed);
  };
  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/logout`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/login");
      } else {
        setLoading(false);
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && <span className="text-lg font-bold">Admin</span>}

        <button
          className="p-2 focus:outline-none text-white hover:bg-gray-700 rounded"
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-4">
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-4 py-2 hover:bg-gray-700 rounded"
            >
              {!isCollapsed && "Donations"}
              {isCollapsed && <RiExchangeFundsFill />}
            </a>
          </li>

          <li>
            <button
              disabled={loading}
              onClick={handleLogout}
              className="flex items-center mx-auto justify-center gap-2 px-4 py-2 hover:bg-gray-700 rounded"
            >
              {!isCollapsed && "Logout"}
              {isCollapsed && <IoLogOut />}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
