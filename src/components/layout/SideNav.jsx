import React from "react";
import BarChartIcon from "../../assets/icons/bar-chart.svg";
import UserPlusIcon from "../../assets/icons/user-plus.svg";
import UserIcon from "../../assets/icons/user.svg";
import ArrowIcon from "../../assets/icons/arrow.svg";
import Link from "next/link";
import { useRouter } from "next/router";

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

const SideNav = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-64 border-r-[1px] py-3 h-full border-[#D9D9D9] ">
        <div className="flex flex-col gap-1">
          {NavbarList.map((item, index) => (
            <Link key={index} href={item.navlink}>
              <div
                className={`px-7 py-3 cursor-pointer transation bg-white hover:bg-gray-300 flex items-center ${
                  item.sidearrow && "justify-between"
                } ${
                  router.pathname === item.navlink
                    ? "bg-gray-300 text-black font-semibold"
                    : "text-[#737373] font-medium"
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
                  className={`px-7 py-3 cursor-pointer transation bg-white hover:bg-gray-300 flex items-center 
                   ${
                     router.pathname === item.navlink
                       ? "bg-gray-300 text-black font-semibold"
                       : "text-[#737373]"
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
      </div>
    </>
  );
};

export default SideNav;
