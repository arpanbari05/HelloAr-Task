import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar/Navbar";
import { useToggle } from "../customHooks";
import "./Home.css";

function Home({ children }) {
  const navbar = useToggle(false);
  return (
    <div>
      <Header onOpen={navbar.handleOpen} />
      <div className="grid inner-wrapper">
        <Navbar open={navbar.show} onClose={navbar.handleClose} />
        <div className="py-5 px-3 lg:py-8 lg:px-12">{children}</div>
      </div>
    </div>
  );
}

export default Home;
