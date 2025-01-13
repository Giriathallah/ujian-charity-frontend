import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-second  p-4 fixed top-0 left-0 w-full text-black">
      <div className="container mx-auto flex justify-between md:justify-around items-center">
        {/* Navbar Brand */}
        <div className="text-black  text-lg font-bold">Charity</div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black  focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex md:items-center space-x-6 text-black ">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-600">
            Contact
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="bg-blue-600 text-white text-center space-y-2 py-2">
            <li>
              <Link href="/" className="block hover:bg-blue-700 py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:bg-blue-700 py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:bg-blue-700 py-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
