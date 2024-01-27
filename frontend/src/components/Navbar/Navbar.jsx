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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center h-16 p-4 top-0 sticky bg-[#141627]">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div
          className="navbar__left text-white cursor-pointer sm:text-lg md:text-xl lg:text-2xl xl:text-4xl"
          onClick={() => navigate("/")}
        >
          Nomaid Social
        </div>
        <FiMenu className="sm:hidden text-white cursor-pointer" onClick={toggleMenu} />
      </div>

      <div className="navbar__center hidden sm:flex flex-row items-center mt-4 sm:mt-0">
        <FaSearch className="text-white mr-2" />
        <input placeholder="Search here" className="rounded-md p-2 bg-gray-200" />
        <div className="hidden sm:flex">
          <span className=" ml-5 text-white">Homepage</span>
          <span className=" ml-4 text-white">Timeline</span>
        </div>
      </div>
      <div className={`navbar__right flex flex-col sm:flex-row items-center mt-4 sm:mt-0 ${isOpen ? '' : 'hidden'} sm:flex justify-end`}>
        <BsPersonFill className="text-white mx-2" />
        <FaMessage className="text-white mx-2" />
        <IoIosNotifications className="text-white mx-2" />
        <IoIosArrowDropdownCircle className="text-white mx-2" />
        <MdDarkMode className="text-white mx-2" />
        <div className="profileImage w-[32px] h-[32px]  rounded-full overflow-hidden cursor-pointer">
          <img className="object-cover" src={ProfileImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;