import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";
import { IoIosHeartDislike } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { AiFillDownSquare } from "react-icons/ai";
// import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#1C1F37] flex flex-col h-screen sm:w-64 md:w-80 lg:w-96 xl:w-[40vh] justify-between font-helvetica text-white text-center">
      <div className=" btn  sm:hidden flex justify-end">
        <GiHamburgerMenu size={32} onClick={toggleSidebar} />
      </div>
      {/*<div className="flex flex-row space-x-4 p-4">
            <FaSearch className="text-white" />
            <input type="search" placeholder="Search..." className="p-2 rounded-md flex-grow text-black" />
    </div> */}

      <div className="flex flex-row justify-center">
        <Link to="/" className="flex flex-row justify-center">
          <MdSpaceDashboard size={32} />
          <span className="px-3">Dashboard</span>
        </Link>
      </div>
      <div>
        <Link to="/homepage" className="flex flex-row justify-center">
          <CgCommunity size={32} />
          <span className="px-3">Community</span>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link to="/features ">
          <div className="flex flex-row">
            <AiFillDownSquare size={32} />
            <span className="px-3">Features</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link to="/book" className="flex flex-row justify-center">
          <TbBrandBooking size={32} />
          <span className="px-3">Booking</span>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link to="/inbox" className="flex flex-row">
          <FaMessage size={32} />
          <span className="px-3">Message</span>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link to="/help">
          <div className="flex">
            <FaHandsHelping size={32} />
            <span className="px-3">Help</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link to="/setting" className="flex flex-row">
          <IoIosSettings size={32} />
          <span className="px-3">Setting</span>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link to="/login" className="flex">
          <IoLogOut size={32} />
          <span className="px-3">Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
