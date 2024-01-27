import './Share.css'
import ProfileImage from "../../assets/1.jpeg";
import { MdPermMedia } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";

const Share = () => {
  return (
    <div className="share w-full h-[170px] mr-4 mt-5 p-4 border-2 border-stone-100">
      <div className="sharewrapper p-2 ">
        <div className="sharetop flex flex-row   ">
          <img
            className="coverimage h-[45px] w-[45px] rounded-[50%] object-cover"
            src={ProfileImage}
            alt=""
          />
          <input
            className=" ml-6 border-2 border-cyan-500 rounded-md"
            placeholder="Wanna share something"
            type="text"
          />
        </div>
        <hr className="hr" />
        <div className="sharebottom">
          <div className="shareoptions flex justify-between  ">
            <div className="shareoption flex ">
              <MdPermMedia className=" mt-2" />
              <span>Photos/Videos</span>
            </div>
            <div className="shareoption flex">
              <FaTag className=" mt-2" />
              <span>Tag</span>
            </div>
            <div className="shareoption flex">
              <FaLocationDot className=" mt-2" />
              <span>Location</span>
            </div>
            <div className="shareoption flex ">
              <TfiThought className=" mt-2"/>
              <span>Thoughts</span>
            </div>

            <button className="btn rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
