import './Post.css'
import ProfileImage from "../../assets/1.jpeg";
import Like from "../../assets/like.png";
import Heart from "../../assets/heart.png";
import { CiMenuKebab } from "react-icons/ci";

const Post = ({post}) => {
  console.log(post)
  return (
    <div className="post p-4 m-4 bg-white rounded shadow-md max-w-lg mx-auto overflow-y-auto">
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
                <span className="postusername text-lg font-semibold">Aditya Varshney</span>
                <span className="postdate text-sm text-gray-500 ml-4">3 min ago</span>
              </div>
            </div>
            <CiMenuKebab className="text-xl text-gray-700" />
          </div>
        </div>
        {/* finishes here */}

        {/* post content */}
      </div>
      <div className="postcenter mt-4">
        <span className="block mb-4 text-lg text-gray-800">Its my first post</span>

        <img
          className="max-h-[500px] w-full object-contain mb-4"
          src={ProfileImage}
          alt=""
        />

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <img className="w-6 h-6" src={Like} alt="" />
            <img className="w-6 h-6" src={Heart} alt="" />
          </div>
          <div className="flex space-x-4">
            <span className="postcounter text-sm text-gray-500">67 people liked it</span>
            <span className="text-sm text-gray-500">9 people comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;