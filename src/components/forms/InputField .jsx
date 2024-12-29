import React from "react";

const InputField = ({ label, value, onChange, style, type, ...props }) => {
  return (
    <>
      {type && type === "textarea" ? (
        <div
          className={`rounded-md border border-gray-300 shadow-sm px-4 py-2 ${
            style && style
          }`}
        >
          {label && (
            <label className="text-xs font-semibold text-[#737373]">
              {label}
            </label>
          )}
          <textarea
            className=" block h-20 text-sm w-full font-medium focus:border-0 focus:outline-none"
            defaultValue={value}
            onChange={onChange}
            {...props}
          />
        </div>
      ) : (
        <div
          className={`rounded-md border border-gray-300 shadow-sm px-4 py-2 ${
            style && style
          }`}
        >
          {label && (
            <label className="text-xs font-semibold text-[#737373]">
              {label}
            </label>
          )}
          <input
            type={type}
            className=" block text-sm w-full font-medium focus:border-0 focus:outline-none"
            defaultValue={value}
            onChange={onChange}
            {...props}
          />
        </div>
      )}
    </>
  );
};

export default InputField;
