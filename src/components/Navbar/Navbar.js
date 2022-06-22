import React from "react";
import Link from "../Common/NavItem";
import userImage from "../../assets/user.jpg";
import { BsChevronDown } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import "./Navbar.css";

const navLinks = [
  {
    to: "/products",
    label: "Products",
  },
  {
    to: "/demo-scripts",
    label: "Demo Scripts",
  },
  {
    to: "/customers",
    label: "Customers",
  },
  {
    to: "/sales-team",
    label: "Sales Team",
  },
  {
    to: "/demos",
    label: "Demos",
  },
  {
    to: "/settings",
    label: "Settings",
  },
];

function Navbar({ open = false, onClose }) {
  return (
    <>
      {open && (
        <div className="block lg:hidden fixed w-full h-[100vh] bg-[rgba(0,0,0,.3)] z-10 top-0 left-0" />
      )}
      <div
        className={`navbar bg-white w-[70vw] lg:w-full flex flex-col items-start fixed lg:static transition-all top-0 left-0 z-20 lg:z-0 ${
          open ? "open" : "close"
        }`}
      >
        <div className="lg:hidden w-full flex px-6 my-10 justify-between items-center">
          <button className="flex gap-2 items-center justify-center">
            <img
              className="w-12 h-12 rounded-full object-contain"
              src={userImage}
              alt="user-logo"
            />
            <p className="font-medium text-md">Arpan Bari</p>
            <BsChevronDown />
          </button>

          <button onClick={onClose}>
            <GrClose />
          </button>
        </div>
        <div className="grid w-full" onClick={onClose}>
          {navLinks.map((nav) => (
            <Link to={nav.to} label={nav.label} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
