import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import ProfileImage from "../../assets/1.jpeg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#141627] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="text-white font-semibold text-lg sm:text-xl cursor-pointer" onClick={() => navigate("/")}>
              Nomaid Social
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search here"
                className="pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#D1F366]"
              />
            </div>
            <NavLink>Homepage</NavLink>
            <NavLink>Timeline</NavLink>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <IconButton icon={<BsPersonFill />} />
            <IconButton icon={<FaMessage />} />
            <IconButton icon={<IoIosNotifications />} />
            <IconButton icon={<MdDarkMode />} />
            <img src={ProfileImage} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1C1F37] p-4">
          <div className="space-y-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search here"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <MobileNavLink>Homepage</MobileNavLink>
            <MobileNavLink>Timeline</MobileNavLink>
            <div className="flex justify-around pt-4 border-t border-gray-700">
              <IconButton icon={<BsPersonFill />} />
              <IconButton icon={<FaMessage />} />
              <IconButton icon={<IoIosNotifications />} />
              <IconButton icon={<MdDarkMode />} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Helper components
const NavLink = ({ children }) => (
  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
    {children}
  </a>
);

const MobileNavLink = ({ children }) => (
  <a className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">
    {children}
  </a>
);

const IconButton = ({ icon }) => (
  <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700">
    {icon}
  </button>
);

export default Navbar;