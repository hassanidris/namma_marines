import React from "react";
import { bannerAbout, imgHistory } from "../constants/images";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t } = useTranslation(["history"]);
  const { description1, title1_1, description1_1, title1_2, description1_2 } =
    t("description");
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
            <p>{description1}</p>
            <article>
              <h2>{title1_1}</h2>
              <p>{description1_1}</p>
            </article>
            <article>
              <h2>{title1_2}</h2>
              <p>{description1_2}</p>
            </article>
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
