import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Package from "../../components/ReusableComponents/Packages/Package";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState([
    {
      imgURL:
        "https://www.savaari.com/blog/wp-content/uploads/2021/12/Travel-Manali-view-point-87239-pixahive.jpg",
      name: "Nurturing Nature",
      price: 10000,
      desc: "Discover the unmatched levels of enthusiasm with our latest and most popular complete package of tour of Manali",
    },
    {
      imgURL:
        "https://media.istockphoto.com/id/1166378619/photo/large-group-of-happy-friends-in-mountains-area.jpg?s=612x612&w=0&k=20&c=PRlOrqCmlc7QEpTtQw5Blk5NlTtQzT8osgFDK8059p0=",
      name: "Whatever it takes!",
      price: 50000,
      desc: "Perfect for group of friends, this package is a complete package of fun and adventure. You'll get to explore the hidden and unexplored places of Mukteshwar and including it, you'll get to experience the best of the best.",
    },
    {
      imgURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/now-that-ram-mandir-in-ayodhya-has-been-inaugurated--the-city-is-set-to-witness-a-major-tourism-boom-253817519-16x9_0.jpg?VersionId=uF7qAYqwGBgIlWs8R9hOF55RQG0lMLSa&size=690:388",
      name: "Ayodhya - The Dream",
      price: 20000,
      desc: "This package is a complete package of bhakti and devotion. You'll be experiencing Shri Ram ",
    },
    {
      imgURL: "URL2",
      name: "Package 2",
      price: 20000,
      desc: "Description for package 2",
    },
  ]);

  const transfer = (bookingProps) => {
    navigate("/bookingpage", { state: bookingProps });
  };
  return (
    <div className="flex flex-row bg-[#141627] overflow-hidden w-[100vw] h-[100vh]">
      <div>
        <Sidebar />
      </div>
      <main className="text-white flex flex-col w-full overflow-y-scroll">
        <div className="flex flex-col text-center m-8 text-2xl">
          Wondering where to go? <br />
          <span>
            Checkout our{" "}
            <span className="text-[#D1F366] font-semibold text-3xl">
              famous
            </span>{" "}
            packages!
          </span>
        </div>
        <div className="m-[2em] flex flex-wrap w-[70vw]">
          {packageData.map((packageProps, index) => (
            <Link key={index} to="/bookingpage" state={packageProps}>
              <Package
                imgURL={packageProps.imgURL}
                name={packageProps.name}
                price={packageProps.price}
                desc={packageProps.desc}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Booking;
