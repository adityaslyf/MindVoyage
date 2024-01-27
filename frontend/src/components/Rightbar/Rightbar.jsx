import "./Rightbar.css";
import Profileimage from "../../assets/1.jpeg";

const Rightbar = () => {
  return (
    <div className="rightbar bg-[#1C1F37] text-white">
      <div className="container">
        {/* Suggestion Section */}
        <div className="item mt-6 m-4">
          <h2 className="text-lg font-bold mb-4">Suggestions for You</h2>
          <div className="user space-y-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="userInfo flex justify-between items-center">
                <div className="userdetails flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={Profileimage}
                    alt=""
                  />
                  <span className="font-medium">Shrradha Kushwaha</span>
                </div>
                <div className="userButton flex space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1   rounded">Follow</button>
                  <button className="bg-gray-500 text-white px-3 py-1  rounded">Dismiss</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Last Activities Section */}
        <div className="item mt-6 m-4 ">
          <h2 className="text-lg font-bold mb-4">Last Activities</h2>
          <div className="user space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="userInfo flex justify-between items-center">
                <div className="userdetails flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={Profileimage}
                    alt=""
                  />
                  <span className="font-medium">Shrradha Kushwaha</span>
                  <span className="ml-2">liked a post</span>
                </div>
                <div className="status">
                  <span className=" mr-4">1 min ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Status Section */}
        <div className="item mt-6 m-4">
          <h2 className="text-lg font-bold mb-4">Online Status</h2>
          <div className="user space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="userInfo flex justify-between items-center">
                <div className="userdetails flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={Profileimage}
                    alt=""
                  />
                  <span className="font-medium">Shrradha Kushwaha</span>
                </div>
                <div className="status">
                  <span className="text-green-500 mr-4">Online</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
