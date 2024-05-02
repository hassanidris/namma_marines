import React from "react";
import { nesmaLogo } from "../constants/images";

const Footer = () => {
  return (
    <footer className="p-4 bg-primary">
      <div className="wrapper max-w-[1290px] w-full m-auto flex flex-col sm:flex-row gap-3 justify-between items-center text-white text-sm">
        <small className="left">
          All Rights Reserved. &copy; Copyright {new Date().getFullYear()} |
          Namma Marines Services
        </small>
        <div className="right">
          <div className="logo flex items-center justify-center gap-2">
            <img className="w-12 " src={nesmaLogo} alt="" />
            <small>NESMA HOLDING GROUP</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
