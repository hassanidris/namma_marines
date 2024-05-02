import React from "react";
import { bannerHome1 } from "../constants/images";

const Home = () => {
  return (
    <div className="w-full h-full">
      <img
        className="w-full h-[calc(100vh-140px)] object-cover"
        src={bannerHome1}
        alt=""
      />
    </div>
  );
};

export default Home;
