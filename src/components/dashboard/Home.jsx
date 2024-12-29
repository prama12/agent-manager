import React, { useState } from "react";
import BackButton from "../button/BackButton";
import EditIcon from "../../assets/icons/edit.svg";
import PersionalDetails from "./PersionalDetails";
import InputField from "../forms/InputField ";

const Home = () => {
  // Track the active tab
  const [activeTopTab, setActiveTopTab] = useState("Service Application");
  const [activeTab, setActiveTab] = useState("Basic Information");

  //topbar tabs
  const topTabs = [
    "Summary",
    "Personal Details",
    "Service Application",
    "Agreements",
    "Visa Application",
    "Reminders",
    "Tasks",
    "Notes",
  ];

  // Sidebar Tabs
  const tabs = [
    "Basic Information",
    "Passport Details",
    "English Test",
    "Professional Year",
    "Skill Assessment",
    "Work Experience",
    "Travel History",
    "Address History",
  ];

  //input field for the user details
  const inputFieldData = [
    {
      label: "First Name",
      value: "Niran",
      type: "text",
    },
    {
      label: "Middle Name",
      value: "-",
      type: "text",
    },
    {
      label: "Last Name",
      value: "Maharjan",
      type: "text",
    },
    {
      label: "Marital Status",
      value: "De Facto",
      type: "text",
    },
    {
      label: "Referred By",
      value: "Facebook",
      type: "text",
    },
    {
      label: "Phone Number",
      value: "98535425456",
      type: "number",
    },
    {
      label: "Gender",
      value: "Male",
      type: "text",
    },
    {
      label: "Status",
      value: "Client",
      type: "text",
    },
    {
      label: "Branch",
      value: "Kumaripati",
      type: "text",
    },
    {
      label: "Residential Address",
      value: "Patan Dhoka, Lalitpur, Nepal",
      type: "text",
    },
    {
      label: "Description",
      style: "sm:col-span-2",
      type: "textarea",
      value:
        "Currently holding 408 visa expiring on MARCH 2025 Bachelor in IT from MIT completed on 2020 Skill assessment done with work experience - ICT Support Engineer EOI submitted - 85 points (190) Age- 25 English - Proficient English Emergency contact details: Name: Prashiksha Pokharel phone number:0478079950 email address: pokharelprashiksha7@gmail.com relationship with me: sister No NAATI",
    },
  ];

  return (
    <>
      <div className="w-full  ">
        <BackButton />

        {/* Persional Details */}
        <PersionalDetails />

        {/* User Navigation */}
        <div className=" mt-5">
          {/* top tab for the user details */}

          <div className="">
            <div className="flex px-3 overflow-x-auto gap-6 no-scrollbar ">
              {topTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTopTab(tab)}
                  className={` text-xs py-2 font-semibold transation shrink-0 hover:text-black leading-[14.52px] ${
                    activeTopTab === tab
                      ? "border-b-[2px] border-blue-500"
                      : "text-slate-500 "
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-7">
              {/* Content for the selected tab */}
              <div className="mt-4 text-gray-600">
                {activeTopTab === "Service Application" && (
                  <div className=" flex flex-col mdd:grid gap-5 grid-cols-12">
                    {/* Side tab */}
                    <div className="col-span-3 hidden mdd:block bg-white rounded p-4 ">
                      <nav>
                        <ul className="space-y-2">
                          {tabs.map((tab) => (
                            <li
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              className={`cursor-pointer py-2 px-4 flex items-center justify-between text-xs border border-slate-100 shadow-sm hover:shadow transation leading-[14.52px] rounded ${
                                activeTab === tab
                                  ? "bg-blue-500 text-white font-bold"
                                  : "text-black font-medium"
                              }`}
                            >
                              {tab}
                              <span className="bg-green-500 border border-white w-2 h-2 rounded-full"></span>
                            </li>
                          ))}
                        </ul>
                        <button className="mt-6 text-xs leading-[14.88px] font-semibold w-full py-2 rounded hover:shadow-md text-blue-500 border border-blue-500 ">
                          Request Client Info
                        </button>
                      </nav>
                    </div>

                    {/* small device  */}
                    <div className="flex px-3 mdd:hidden overflow-x-auto gap-6 no-scrollbar bg-white ">
                      {tabs.map((tab) => (
                        <div
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={` text-xs py-2 font-semibold transation shrink-0 hover:text-black leading-[14.52px] ${
                            activeTab === tab
                              ? "border-b-[2px] border-blue-500"
                              : "text-slate-500 "
                          }`}
                        >
                          {tab}
                        </div>
                      ))}
                    </div>

                    {/* Main Content */}
                    <main className="col-span-12 mdd:col-span-9 bg-white p-5">
                      <div className="leading-[19.36px] border-b flex items-center justify-between border-slate-200 font-semibold pb-2">
                        {activeTab}
                        <EditIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                      </div>

                      {/* Render content based on the active tab */}
                      {activeTab === "Basic Information" && (
                        <div className="grid sm:grid-cols-2 pt-5 gap-2 sm:gap-5">
                          {/* Form Fields */}

                          {inputFieldData.map((item, index) => (
                            <InputField
                              key={index}
                              label={item.label}
                              value={item.value}
                              style={item.style}
                              type={item.type}
                            />
                          ))}
                        </div>
                      )}
                      {activeTab !== "Basic Information" && (
                        <div className="text-gray-600 pt-4 text-xs">
                          Content for {activeTab}
                        </div>
                      )}
                    </main>
                  </div>
                )}

                {activeTopTab !== "Service Application" && (
                  <div className="text-gray-600 bg-white px-4 py-10 rounded shadow-sm pt-4 text-sm">
                    This is the {activeTopTab}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
