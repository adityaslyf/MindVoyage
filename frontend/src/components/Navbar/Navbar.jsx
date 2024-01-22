import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
 
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-[#141627] bg-opacity-40 backdrop-blur-md border border-gray-200 rounded-xl p-4 w-full sm:w-auto h-10 m-0 text-2xl text-slate-200">
      <span onClick={()=>navigate("/")}> Nomaid Social</span>
      {/* <FaHamburger /> */}
      <div className="flex items-center space-x-4">
        <FaSearch />
        <input type="text" className="rounded-md" />
        <MdDarkMode />
        <FaMessage />
        <IoIosNotifications />
        <IoIosHelpCircle />
        <IoIosArrowDropdownCircle />
      </div>
    </div>
  );
};

export default Navbar;
