import React from "react";
import { bannerAbout, imgHistory } from "../constants/images";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t } = useTranslation(["history"]);
  const { paragraph1, paragraph2 } = t("description");
  return (
    <>
      <section className=" w-full h-[400px]">
        <img
          className=" w-full h-full object-cover object-top"
          src={bannerAbout}
          alt="banner profile"
        />
      </section>
      <div className=" w-full max-w-[1024px] mx-auto  py-10 px-5">
        <h1>{t("title")}</h1>
        <div className=" flex flex-col sm:flex-row justify-center gap-5">
          <div className=" flex-[1.5]">
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
          <div className=" flex-1">
            <img src={imgHistory} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
