import React from "react";
import BarChartIcon from "../../assets/icons/bar-chart.svg";
import UserPlusIcon from "../../assets/icons/user-plus.svg";
import UserIcon from "../../assets/icons/user.svg";
import ArrowIcon from "../../assets/icons/arrow.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import CrossIcon from "../../assets/icons/cross.svg";

const NavbarList = [
  {
    icon: BarChartIcon,
    title: "Dashboard",
    navlink: "/",
  },
  {
    icon: UserPlusIcon,
    title: "LMT",
    navlink: "/lmt",
    sidearrow: true,
  },
  {
    icon: UserIcon,
    title: "MeetSync",
    navlink: "/meetsync",
    sidearrow: true,
  },
  {
    icon: UserIcon,
    title: "Agreements",
    navlink: "/agreements",
    sidearrow: true,
  },
  {
    icon: UserIcon,
    title: "Activity",
    navlink: "/activity",
    sidearrow: true,
  },
];
const GlobalNavList = [
  {
    icon: UserIcon,
    title: "Agent",
    navlink: "/agent",
  },
  {
    icon: UserIcon,
    title: "Users",
    navlink: "/users",
  },
  {
    icon: UserIcon,
    title: "Clients",
    navlink: "/clients",
  },
  {
    icon: UserIcon,
    title: "Branch",
    navlink: "/branch",
  },
  {
    icon: UserIcon,
    title: "Department",
    navlink: "/department",
  },
];

const SideItem = ({ router }) => {
  // console.log("path", router.pathname);
  return (
    <>
      <div className="flex flex-col gap-1">
        {NavbarList.map((item, index) => (
          <Link key={index} href={item.navlink}>
            <div
              className={`px-7 py-3 cursor-pointer transation  hover:bg-gray-200 flex items-center ${
                item.sidearrow && "justify-between"
              } ${
                router.pathname === item.navlink
                  ? "bg-gray-200 text-black font-semibold"
                  : "text-[#737373] font-medium bg-white"
              } `}
            >
              <div className="flex gap-2 items-center">
                <item.icon className="w-5 h-5" />
                <p className="text-sm leading-[17.36px]">{item.title}</p>
              </div>
              {item.sidearrow && <ArrowIcon className="w-5 h-5" />}
            </div>
          </Link>
        ))}
      </div>

      {/* global */}

      <div className="flex flex-col gap-1 mt-8">
        <div className="px-7 text-sm leading-[17.36px] font-semibold">
          Global
        </div>
        <div className="flex flex-col gap-1">
          {GlobalNavList.map((item, index) => (
            <Link key={index} href={item.navlink}>
              <div
                className={`px-7 py-3 cursor-pointer transation hover:bg-gray-200 flex items-center 
                   ${
                     router.pathname === item.navlink
                       ? "bg-gray-200 text-black font-semibold"
                       : "text-[#737373] font-medium bg-white"
                   } `}
              >
                <div className="flex gap-2 items-center">
                  <item.icon className="w-5 h-5" />
                  <p className="text-sm leading-[17.36px]">{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const SideNav = ({ showSideNav, setShowSideNav }) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`hidden lg:block lg:w-52 xl:w-64 border-r-[1px] py-3 h-full border-[#D9D9D9]`}
      >
        <SideItem router={router} />
      </div>

      {showSideNav && (
        <div
          className={` ${
            showSideNav
              ? " w-full lg:hidden sm:w-64 opacity-100 "
              : "w-0 opacity-0"
          }  fixed top-0 right-0 z-50 h-screen  bg-white transation`}
          onClick={() => setShowSideNav(false)}
        >
          <div className="lg:hidden py-3 h-full">
            <div className="flex justify-end border-b border-slate-300 py-3 px-5">
              <div
                onClick={() => setShowSideNav(false)}
                className="flex items-center cursor-pointer justify-center bg-gray-200 text-gray-700 shadow w-8 h-8 text-sm leading-[17.36px] font-semibold rounded-full border border-[#D9D9D9] "
              >
                <CrossIcon className="w-4 h-4 " />
              </div>
            </div>

            <SideItem router={router} />
          </div>
        </div>
      )}
    </>
  );
};

export default SideNav;
