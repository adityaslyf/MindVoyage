import "./Leftbar.css";
import { MdOutlineRssFeed } from "react-icons/md";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaVideoSlash } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import ProfileImage from '../../assets/1.jpeg'
const Leftbar = () => {
  return (
    <div className="leftbar bg-green-500 overflow-y-scroll">
      <div className="sidebarwrpper p-20px">
        <ul className="sidebarlist p-o m-0">
          <li className="sidebarlistitems flex  items-center mb-20">
            <MdOutlineRssFeed className=" mx-5" />
            <span>Feed</span>
          </li>
          <li className="sidebarlistitems flex items-center mb-20">
            <BsChatSquareQuoteFill className=" mx-5" />
            <span>Chats</span>
          </li>
          <li className="sidebarlistitems flex items-center mb-20">
            <FaVideoSlash className=" mx-5" />
            <span>Videos</span>
          </li>
          <li className="sidebarlistitems flex items-center mb-20">
            <MdGroups2 className=" mx-5" />
            <span>Groups</span>
          </li>
          <li className="sidebarlistitems flex items-center mb-20">
            <IoBookmarkSharp className=" mx-5" />
            <span>Bookmark</span>
          </li>
          <li className="sidebarlistitems flex items-center mb-20">
            <FaQuestion className=" mx-5" />
            <span>Questions</span>
          </li>
          <li className="sidebarlistitems flex items-center mb-20">
            <MdOutlineRssFeed className=" mx-5" />
            <span>Feed</span>
          </li>
          <li className="sidebarlistitems flex items-center mb-20">
            <MdOutlineRssFeed className=" mx-5" />
            <span>Feed</span>
          </li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More
        </button>
        <hr />
        <ul className="sidebarfriendlist">
          <li className=" flex w-[34px] h-[34px] mx-4">
          <img src={ProfileImage} alt="" />
            <span className=" mx-2">Aditya</span>
            
          </li>
          <li className=" flex w-[34px] h-[34px] mx-4">
          <img src={ProfileImage} alt="" />
            <span className=" mx-2">Aditya</span>
            
          </li>
          <li className=" flex w-[34px] h-[34px] mx-4">
          <img src={ProfileImage} alt="" />
            <span className=" mx-2">Aditya</span>
            
          </li>
          <li className=" flex w-[34px] h-[34px] mx-4">
          <img src={ProfileImage} alt="" />
            <span className=" mx-2">Aditya</span>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
