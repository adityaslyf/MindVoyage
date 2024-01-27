import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const BookingPage = () => {
  const location = useLocation();
  const packageData = location.state || {};

  return (
    <div className="bg-[#141627] flex flex-col overflow-hidden w-[100vw] h-[100vh]">
      <div>
        <Navbar />
      </div>
      <main className="text-white flex flex-row mb-4 w-full h-[100vh] overflow-x-hidden overflow-y-scroll p-10">
        <div className="flex flex-col">
          <img src={packageData.imgURL} className="w-[60vw] border-2 p-4 rounded-lg" />
          <div className="flex justify-between w-[60vw]">
            <h1 className="text-2xl py-4">{packageData.name}</h1>
            <a href="https://www.predict.com" target="_blank">
              <button className="bg-[#1C1F37] p-2 m-2 my-4 text-sm rounded-sm font-semibold text-white hover:shadow-[1em] hover:translate-y-[-2px] transition-all hover:rounded-lg hover:bg-[#D1F366] hover:text-[#141627]">
                Book Now!
              </button>
            </a>
          </div>
          <div className="flex justify-between text-center bg-slate-600 p-3 mb-4 rounded-lg w-[60vw]">
            <div className="flex flex-col">
              <p className="text-sm p-4">{packageData.desc}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-[4em] w-[23vw] bg-[#1C1F37] h-fit p-4 text-center align-middle justify-center">
            <h1>
                Experience the famous places of {packageData.name} in VR!
            </h1>
            {packageData.vrModel && (
              <div className="w-[20vw]">
                <h2 className="pt-4 text-xl text-[#D1F366] font-semibold">{packageData.vrModel.title}</h2>
                <p className="p-4">Made by: {packageData.vrModel.modelAuthor}</p>
                <iframe
                  title={packageData.vrModel.modelTitle}
                  src={packageData.vrModel.modelURL}
                  allowFullScreen
                ></iframe>
              </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
