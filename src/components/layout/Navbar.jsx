import React from "react";
import LayoutIcon from "../../assets/icons/layout.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex-1 pr-7 flex  sticky top-0 justify-between items-center w-full bg-white shadow-md">
        <div className="text-xl pl-7 font-bold h-[65px] border-r-[1px] w-64  flex items-center gap-2 leading-[24.8px]">
          <LayoutIcon className="w-6 h-6" />
          Agent Manager
        </div>
        <div className="flex items-center justify-center text-gray-700 shadow w-8 h-8 text-sm leading-[17.36px] font-semibold rounded-full border border-[#D9D9D9] ">
          <p className="">PP</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
