import React from "react";
import BackArrow from "../../assets/icons/left-arrow.svg";
import Arrow from "../../assets/icons/arrow.svg";

const BackButton = () => {
  return (
    <div className="flex w-fit px-4 bg-white py-2 items-center gap-4 rounded shadow-sm cursor-pointer">
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <BackArrow className="w-3 h-3" />
      </div>
      <div className="text-xs font-medium text-[#737373] leading-[14.88px] flex gap-1 items-center ">
        <div>Home</div>
        <Arrow className="-rotate-90 w-4 h-4" />
        <div className="text-black">Clients</div>
      </div>
    </div>
  );
};

export default BackButton;
