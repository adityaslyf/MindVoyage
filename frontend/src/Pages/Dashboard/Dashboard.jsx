import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DestinationCard from "../../components/ReusableComponents/DestinationCard";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./Dashboard.css";
import { User } from "@nextui-org/react";
import ProfileCard from "../../components/ReusableComponents/ProfileCard";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState([
    {
      imgURL:
        "https://www.savaari.com/blog/wp-content/uploads/2021/12/Travel-Manali-view-point-87239-pixahive.jpg",
      name: "Nurturing Nature",
      desName: "Manali",
      price: 10000,
      desc: "Discover the unmatched levels of enthusiasm with our latest and most popular complete package of tour of Manali",
    },
    {
      imgURL:
        "https://images.hindustantimes.com/img/2022/09/10/550x309/central_vista_revellers_latest_news_1662770038066_1662770038195_1662770038195.jpg",
      name: "Whatever it takes!",
      desName: "Delhi",
      price: 50000,
      desc: "Perfect for group of friends, this package is a complete package of fun and adventure. You'll get to explore the hidden and unexplored places of Mukteshwar and including it, you'll get to experience the best of the best.",
      vrModel: {
        title: "Qutub Minar",
        modelURL: "https://sketchfab.com/models/59fe55328271479d82acb65310178d99/embed",
        modelTitle: "Qutub Minar",
        modelAuthor: "shraddhakushwaha",
      }
    },
    {
      imgURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/now-that-ram-mandir-in-ayodhya-has-been-inaugurated--the-city-is-set-to-witness-a-major-tourism-boom-253817519-16x9_0.jpg?VersionId=uF7qAYqwGBgIlWs8R9hOF55RQG0lMLSa&size=690:388",
      name: "Ayodhya - The Dream",
      desName: "Ayodhya",
      price: 20000,
      desc: "This package is a complete package of bhakti and devotion. You'll be experiencing Shri Ram ",
      vrModel: {
        title: "Ram Mandir",
        modelURL: "https://sketchfab.com/models/d182f51001644521b66a8b013892c6fc/embed",
        modelTitle: "Ram Mandir",
        modelAuthor: "shraddhakushwaha",
      },
    },
    {
      imgURL: "https://live.staticflickr.com/2370/31951271234_193987193f_b.jpg",
      name: "The Grand Dubai Tour",
      desName: "Dubai",
      price: 200000,
      desc: "Experience the vibrant allure of Dubai with our Great Dubai Tour package. Dive into the mesmerizing blend of modernity and tradition as you explore iconic landmarks like the Burj Khalifa, Palm Jumeirah, and the Dubai Mall.",
      vrModel:{
        title: "Dubai City",
        modelAuthor: "shraddhakushwaha",
        modelURL: "https://sketchfab.com/models/04847e60f32449c3b8a04431c555d175/embed",
        modelTitle: "Dubai City",
      }
    },
  ]);

  const transfer = (bookingProps) => {
    navigate("/bookingpage", { state: bookingProps });
  };
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] bg-[#141627] overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <main className="w-[55vw] h-full overflow-y-scroll">
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
            <h1 className="text-[#D0D4E7] text-[2.5em]">Hello, Rishabh</h1>
            <p className="text-[#626577] text-xl">Welcome back and explore!</p>
          </div>
          <div id="popular_destinations flex flex-col">
            <div className="w-[50vw] flex flex-row justify-between">
              <h1 className="text-[#D0D4E7] mt-8 text-[1.7em]">
                Popular Destinations
              </h1>
              <button className="text-[#D1F366] text-sm mt-8 hover:underline">
                View All
              </button>
            </div>
            <div className="flex flex-row mt-6 flex-wrap ">
              {packageData.map((packageProps, index) => (
                <Link key={index} to='/bookingpage' state={packageProps}>
                <DestinationCard
                  key={index}
                  desName={packageProps.desName}
                  imgURL={packageProps.imgURL}
                  name={packageProps.name}
                  price={packageProps.price}
                  desc={packageProps.desc}
                  vrModel={packageProps.vrModel}
                  transfer={transfer}
                />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="w-[20vw] mt-8 ml-10 ">
        <div className="p-2">
          <ProfileCard name={"Rishabh"} imgURL = {"https://rishabhguptajs.vercel.app/images/profile.jpg"} level={"Pro"}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
