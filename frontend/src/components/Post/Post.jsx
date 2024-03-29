import "./Post.css";
import ProfileImage from "../../assets/1.jpeg";
import Like from "../../assets/like.png";
import Heart from "../../assets/heart.png";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(0);
  return (
    <div className="post p-4 m-4 bg-white rounded shadow-md max-w-lg mx-auto ">
      <div className="postWrapper">
        {/* top heading */}
        <div className="postTop">
          <div className="postTopheading flex justify-between items-center">
            <div className="flex items-center">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={ProfileImage}
                alt=""
              />
              <div className="ml-2">
                <span className="postusername text-lg font-semibold">
                  Shraddha Kushwaha
                </span>
                <span className="postdate text-sm text-gray-500 ml-4">
                  {post?.date}
                </span>
              </div>
            </div>
            <CiMenuKebab className="text-xl text-gray-700" />
          </div>
        </div>
        {/* finishes here */}

        {/* post content */}
      </div>
      <div className="postcenter mt-4">
        <span className="block mb-4 text-lg text-gray-800">{post?.desc}</span>

        <img
          className="max-h-[500px] w-full object-contain mb-4"
          src={post?.photo}
          alt=""
        />

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
           <button   onClick={() => {
                setLike(like + 1);
              }}><img className="w-6 h-6" src={Like} alt="" /></button>
            
            <img className="w-6 h-6" src={Heart} alt="" />
          </div>
          <div className="flex space-x-4">
            <span className="postcounter text-sm text-gray-500">
              {like} people liked it
            </span>
            <span className="text-sm text-gray-500">
              {post?.comment} people comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;