import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DestinationCard from "../../components/ReusableComponents/DestinationCard";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="flex flex-row bg-[#141627]">
      <div>
        <Sidebar />
      </div>
      <main className=" w-[45vw]">
        <nav>
          <form
            action=""
            className="h-10vh mt-4 flex ml-8 align-middle justify-between "
          >
            <div>
              <FaSearch className="text-[#a0a3bd] text-2xl mt-[1.35em] ml-[1.25em] absolute" />
              <input
                className="p-4 my-4 w-[30vw] search_input rounded-lg bg-[rgb(28,31,55)] text-center"
                type="text"
                placeholder="Search for your favourite destination"
              />
              <button className="text-[#141627] search_btn rounded-lg bg-[#D1F366] w-fit h-fit mt-[1em] px-7 py-4">
                Search
              </button>
            </div>
            <IoMdNotificationsOutline className="text-[#a0a3bd] p-2 text-xl mt-[1.30em] h-9 w-9 bg-[#1C1F37] rounded-full" />
          </form>
        </nav>

        <div className="flex flex-col ml-8 mt-6">
          <div className="flex flex-col">
            <h1 className="text-[#D0D4E7] text-[2.5em]">Hello, User</h1>
            <p className="text-[#626577] text-xl">Welcome back and explore!</p>
          </div>
          <div id="popular_destinations flex flex-col">
            <div className="w-[40vw] flex flex-row justify-between">
              <h1 className="text-[#D0D4E7] mt-8 text-[1.7em]">
                Popular Destinations
              </h1>
              <button className="text-[#D1F366] text-sm mt-8 hover:underline">
                View All
              </button>
            </div>
            <div className="flex flex-row mt-6 overflow-x-hidden">
              <DestinationCard
                desName={"Bali"}
                price={"₹20000"}
                imgURL={
                  "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960"
                }
              />
              <DestinationCard
                desName={"Bali"}
                price={"₹20000"}
                imgURL={
                  "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960"
                }
              />
              <DestinationCard
                desName={"Bali"}
                price={"₹20000"}
                imgURL={
                  "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960"
                }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
