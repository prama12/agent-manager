import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen no-scrollbar flex flex-col bg-gray-100">
        {/* navbar here */}
        <Navbar />

        <div className="flex w-full h-[calc(100vh-65px)]  ">
          {/* side navbar here */}
          <SideNav />

          {/* main content here */}
          <div className="flex-1 h-full px-5 py-10 overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
