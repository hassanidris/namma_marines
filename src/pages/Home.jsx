import React from "react";
import { bannerHome1 } from "../constants/images";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full">
      <img
        className="w-full h-[calc(100vh-140px)] object-cover object-left"
        src={bannerHome1}
        alt=""
      />
    </div>
  );
};

export default Home;
