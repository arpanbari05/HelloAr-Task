import React from "react";
import userImage from "../assets/user.jpg";
import companyLogo from "../assets/company-logo.jpeg";
import { HiMenu } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

function Header({ onOpen }) {
  return (
    <header className="flex items-center justify-between px-3 lg:px-12 h-[70px] border border-solid border-gray-200">
      <div className="flex gap-2 md:gap-5 items-center">
        <img
          src={companyLogo}
          alt="company logo"
          className="w-12 h-12 object-contain"
        />
        <button
          className="flex gap-2 items-center hover:bg-gray-100 rounded p-2"
          css={`
            border-left: 1px solid #dcdcdc;
            border-right: 1px solid #dcdcdc;
          `}
        >
          <h1 className="font-medium uppercase tracking-[2px]">
            MY APPLICATION
          </h1>
          <BsChevronDown />
        </button>
      </div>

      <button
        className="hidden lg:flex gap-2 items-center justify-center pl-2"
        css={`
          border-left: 1px solid #dcdcdc;
        `}
      >
        <img
          className="w-12 h-12 rounded-full object-contain"
          src={userImage}
          alt="user-logo"
        />
        <button className="flex items-center gap-2 font-medium text-md p-3 hover:bg-gray-200 rounded">
          <span>Arpan Bari</span>
          <BsChevronDown />
        </button>
      </button>
      <button className="lg:hidden" onClick={onOpen}>
        <HiMenu size={30} />
      </button>
    </header>
  );
}

export default Header;
