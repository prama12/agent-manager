import React from "react";
import Image from "next/image";
import Photo from "../../assets/images/image.png";
import TickUser from "../../assets/icons/person-check.svg";
import EditIcon from "../../assets/icons/edit.svg";
import CallIcon from "../../assets/icons/call.svg";
import EmailIcon from "../../assets/icons/email.svg";
import LocationIcon from "../../assets/icons/location.svg";
import ThreeDotIcon from "../../assets/icons/three-dot.svg";
import ArrowIcon from "../../assets/icons/arrow.svg";

// data for the user contact details
const usercontactDetails = [
  {
    icon: CallIcon,
    name: "phone",
    detail: "0433947512",
  },
  {
    icon: EmailIcon,
    name: "email",
    detail: " Prakashbomjan321@gmail.com",
  },
  {
    icon: LocationIcon,
    name: "location",
    detail: "6/11 Waratah Ave Glen Huntly VIC 3163 Australia",
  },
];

// data for the user other details
const otherDetails = [
  {
    name: "Client ID",
    detail: "C12049",
  },
  {
    name: "Added At",
    detail: "21 Oct 2024",
  },
  {
    name: "Category",
    detail: "Visa",
  },
  {
    name: "Added By",
    detail: "Anu Dharel",
  },
  {
    name: "Branch",
    detail: "Melbourne - Australia",
  },
  {
    name: "Referred By",
    detail: "Rohit Bomjan",
  },
];

const PersionalDetails = () => {
  return (
    <>
      {/* user details */}
      <div className="rounded shadow-sm mt-2 flex flex-col-reverse mdd:flex-row mdd:justify-between gap-5 mdd:gap-2 lg:gap-4 p-4 bg-white ">
        {/* image */}
        <div className="flex flex-col mdd:flex-row gap-4 h-fit">
          <div className="rounded overflow-hidden h-[186px]  relative w-[186px] shadow">
            <Image src={Photo} alt="hero" objectFit="cover" fill />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl leading-[29.76px] font-medaim">
                Lukman Bomjan
              </h1>
              <div className="text-[#3B82F6] text-xs leading-[14.88px] flex items-center gap-1 font-semibold px-2 py-1 rounded border border-[#3B82F6]">
                <TickUser />
                <p>Anu Dharel</p>
              </div>
              <div>
                <EditIcon className="cursor-pointer text-[#3B82F6]" />
              </div>
            </div>
            {/* contact Details */}
            <div className="flex items-center flex-wrap gap-2">
              {usercontactDetails.map((item, index) => (
                <div className="flex items-center gap-1" key={index}>
                  <item.icon />
                  <p className="text-xs leading-[14.88px] text-[#737373] font-medium">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* other Details */}
            <div className="flex flex-wrap gap-2">
              {otherDetails.map((item, index) => (
                <div
                  className="flex flex-col w-fit px-3 py-1 rounded border-[0.75px] border-[#DDDDDD] gap-1"
                  key={index}
                >
                  <p className="text-xs leading-[14.88px] text-[#737373] font-semibold">
                    {item.name}
                  </p>
                  <p className="text-sm leading-[17.36px] text-black font-medium">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" flex mdd:flex-col mdd:items-end justify-between">
          <div className="flex gap-3">
            <button className=" px-4 h-fit py-2 border flex gap-2 shadow-sm rounded">
              <p className="flex items-center text-xs leading-[14.88px] text-[#737373] font-medium gap-1">
                <span className="w-3 h-3  bg-[#EAB308] rounded-full"></span>
                Prospects
              </p>
              <ArrowIcon />
            </button>

            {/* three dot button */}
            <div className="w-8 h-8 hover:shadow-md transation cursor-pointer rounded-full bg-gray-200 flex items-center justify-center">
              <ThreeDotIcon className="w-3 h-3" />
            </div>
          </div>

          {/* edit button */}
          <div className="hover:shadow-md transation">
            <button className="px-4 h-fit py-2 border flex gap-2 shadow-sm rounded">
              <EditIcon />
              <p className="flex items-center text-xs leading-[14.88px] text-black font-semibold gap-1">
                Edit
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersionalDetails;
