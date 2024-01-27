import "./Rightbar.css";
import Profileimage from "../../assets/1.jpeg";
const Rightbar = () => {
  return (
    <div className="rightbar">
      Rightbar
      <div className="container">
        <div className="item mt-6">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
                <span className="mt-2">Shrradha Kushwaha</span>
              </div>
              <div className="userButton flex space-x-2">
                <button className="">Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
                <span className="mt-2">Shrradha Kushwaha</span>
              </div>
              <div className="userButton flex space-x-2">
                <button className="">Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          </div>
        </div>

        <div className="item mt-6">
          <span>Last Activites</span>
          <div className="user">
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
                <span className="mt-2">Shrradha Kushwaha</span>
                <span className="mt-2 ml-2">changed their profile page</span>
              </div>
              <div className=" status  flex ">
                <span>1 min ago</span>
              </div>
            </div>
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
                <span className="mt-2">Shrradha Kushwaha</span>
                <span className="mt-2 ml-2">liked a post</span>
              </div>
              <div className=" status  flex ">
                <span className="mt-2 ml-2">1 min ago</span>
              </div>
            </div>
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
                <span className="mt-2">Shrradha Kushwaha</span>
                <span className="mt-2 ml-2">liked a post</span>
              </div>
              <div className=" status  flex ">
                <span>1 min ago</span>
              </div>
            </div>
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
                <span className="mt-2">Shrradha Kushwaha</span>
                <span className="mt-2 ml-2">liked a post</span>
              </div>
              <div className=" status  flex ">
                <span>1 min ago</span>
              </div>
            </div>
          </div>
        </div>


        <div className="item mt-6">
          <span>Last Activites</span>
          <div className="user">
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
             <span>Rishab</span>
              </div>
            
            </div>
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
               <span>Rishab</span>
              </div>
            
            </div>
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
                 <span>Rishab</span>
              </div>
          
            </div>
            <div className="userInfo flex justify-between">
              <div className="userdetails flex">
                <img
                  className="w-11 h-11 rounded-full"
                  src={Profileimage}
                  alt=""
                />
                <span>Rishab</span>
              </div>
           
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Rightbar;
