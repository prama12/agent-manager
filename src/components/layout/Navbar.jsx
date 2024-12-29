import React from "react";
import LayoutIcon from "../../assets/icons/layout.svg";
import MenuIcon from "../../assets/icons/menu.svg";

const Navbar = ({ setShowSideNav }) => {
  return (
    <>
      <div className="flex-1 pr-7 flex sticky top-0 justify-between items-center w-full bg-white shadow-md">
        <div className="text-lg sm:text-xl pl-7 font-bold h-[65px] xl:border-r-[1px] xl:w-64  flex items-center gap-2 leading-[24.8px]">
          <LayoutIcon className="sm:w-6 sm:h-6" />
          Agent Manager
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center text-gray-700 shadow w-8 h-8 text-sm leading-[17.36px] font-semibold rounded-full border border-[#D9D9D9] ">
            <p className="">PP</p>
          </div>
          <div
            className="w-4 h-4 lg:hidden cursor-pointer"
            onClick={() => setShowSideNav(true)}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
