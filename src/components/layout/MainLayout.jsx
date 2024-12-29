import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const MainLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        className={`w-full h-screen no-scrollbar flex flex-col bg-gray-100 `}
      >
        {/* navbar here */}
        <Navbar setShowSideNav={setOpen} />

        <div className={`flex w-full h-[calc(100vh-65px)]`}>
          {/* side navbar here */}
          <SideNav showSideNav={open} setShowSideNav={setOpen} />

          {/* main content here */}
          <div className="flex-1 h-full px-2 sm:px-5 py-3 md:py-10 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
