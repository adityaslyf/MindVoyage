import React from "react";
import ProfileImage from "../../assets/1.jpeg";
import Like from "../../assets/like.png";
import Heart from "../../assets/heart.png";
import { CiMenuKebab } from "react-icons/ci";
const Post = ({post}) => {
  console.log(post)
  return (
    <div className="post shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <div className="postWrapper  ">
        {/* top heading */}
        <div className="postTop">
          <div className="postTopheading flex justify-between ">
            <div className=" flex">
              <img
                className=" w-[45px] h-[45px] object-cover rounded-[50%]"
                src={ProfileImage}
                alt=""
              />
              <span className="postusername mt-3 ml-2">Aditya Varshney</span>
              <span className="postdate mt-3 ml-2">3 min ago</span>
            </div>
            <CiMenuKebab className=" mt-3" />
          </div>
        </div>
        {/* finishes here */}

        {/*  */}
      </div>
      <div className="postcenter">
        <span>Its my first post</span>

        <img
          className=" max-h-[500px] w-full object-contain"
          src={ProfileImage}
          alt=""
        />

        <div className=" flex ">
          <img src={Like} alt="" />
          <img src={Heart} alt="" />
          <div className=" flex ml-64">
          <span className=" postcounter">67 people liked it</span>
          <span>9 people comments</span>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Post;
