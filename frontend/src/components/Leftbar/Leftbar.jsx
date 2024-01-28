import "./Leftbar.css";
import { MdOutlineRssFeed } from "react-icons/md";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaVideoSlash } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import ProfileImage from '../../assets/1.jpeg'

const Leftbar = () => {
  return (
    <div className="leftbar overflow-y-auto sm:w-64 md:w-80 lg:w-96 xl:w-1/4 h-screen bg-[#1C1F37]">
      <div className="sidebarwrpper p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <ul className="sidebarlist p-0 m-0">
          <li className="sidebarlistitems flex items-center mb-20 sm:mb-4">
            <MdOutlineRssFeed className="mx-2 text-white text-2xl sm:text-base" />
            <span className="text-white text-lg">Feed</span>
          </li>
          <li className="sidebarlistitems flex items-center mb-20 sm:mb-4">
            <BsChatSquareQuoteFill className="mx-2 text-white text-2xl sm:text-base" />
            <span className="text-white text-lg">Chats</span>
          </li>
          <li className="sidebarlistitems flex text-white items-center mb-20 sm:mb-4">
            <FaVideoSlash className="mx-2 text-2xl sm:text-base" />
            <span className="text-white text-lg">Videos</span>
          </li>
          <li className="sidebarlistitems flex text-white items-center mb-20 sm:mb-4">
            <MdGroups className="mx-2 text-2xl sm:text-base" />
            <span className="text-white text-lg">Groups</span>
          </li>
          <li className="sidebarlistitems flex text-white items-center mb-20 sm:mb-4">
            <IoBookmarkSharp className="mx-2 text-2xl sm:text-base" />
            <span className="text-white text-lg">Bookmark</span>
          </li>
          <li className="sidebarlistitems flex text-white items-center mb-20 sm:mb-4">
            <FaQuestion className="mx-2 text-2xl sm:text-base" />
            <span className="text-white text-lg">Questions</span>
          </li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Show More
        </button>
        <hr className="my-4" />
        <ul className="sidebarfriendlist">
          <li className="flex items-center text-white mb-2 sm:mb-4">
            <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" src={ProfileImage} alt="" />
            <span className="mx-2 text-sm sm:text-base md:text-lg"> Shraddha Kushwaha</span>
          </li>
          <li className="flex text-white items-center mb-2 sm:mb-4">
            <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" src={ProfileImage} alt="" />
            <span className="mx-2 text-sm sm:text-base md:text-lg"> Shraddha Kushwaha</span>
          </li>
          <li className="flex text-white items-center mb-2 sm:mb-4">
            <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" src={ProfileImage} alt="" />
            <span className="mx-2 text-sm sm:text-base md:text-lg"> Shraddha Kushwaha</span>
          </li>
          <li className="flex text-white items-center mb-2 sm:mb-4">
            <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" src={ProfileImage} alt="" />
            <span className="mx-2 text-sm sm:text-base md:text-lg"> Shraddha Kushwaha</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;