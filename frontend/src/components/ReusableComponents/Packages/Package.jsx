import React from "react";

const Package = ({ name, imgURL, price, desc }) => {
  return (
    <div className="bg-[#1C1F37] h-[38vh] w-[20vw] rounded-2xl text-sm m-2 flex flex-col card_hover_ui">
      <img src={imgURL} className="p-2 w-[20vw] h-[26vh] rounded-[1.7em]" />
      <h1 className="text-[#D0D4E7] p-2">{name}</h1>
      <div className="flex justify-between border-dashed border-t-2 text-[13px] border-t-[#2a2a2a] pricing_ui">
        <span className="p-2 text-[#626577] pricing_ui_text">
          Discounted Price!
        </span>
        <span className="p-2 text-[#D0D4E7] pricing_ui_price">
            <del>₹{price*1.2}</del> -
            ₹{price}
            </span>
      </div>
    </div>
  );
};

export default Package;
