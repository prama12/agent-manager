import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="w-full h-full bg-gray-100">
        <div className="">
          <Navbar />
        </div>
        <div className="flex h-full">
          <SideNav />
          <div className="h-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
