import ProfileImage from "../../assets/1.jpeg";
import { MdPermMedia } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";

const Share = () => {
  return (
    <div className="share w-full h-[170px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="sharewrapper p-2 ">
        <div className="sharetop flex flex-row   ">
          <img
            className="coverimage h-[45px] w-[45px] rounded-[50%] object-cover"
            src={ProfileImage}
            alt=""
          />
          <input
            className=" ml-6"
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

            <button className=" btn rounded-md bg-slate-400">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
