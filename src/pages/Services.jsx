import React from "react";
import { bannerServices, iconCargo, iconPassenger } from "../constants/images";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation(["services"]);
  return (
    <>
      <section className=" w-full h-[400px]">
        <img
          className=" w-full h-full object-cover object-top"
          src={bannerServices}
          alt="banner profile"
        />
      </section>
      <div className=" w-full max-w-[1024px] mx-auto  py-10 px-5">
        <h1>{t("title")}</h1>
        <div className=" flex flex-col sm:flex-row justify-center gap-5">
          <div className=" flex-[2]">
            <article>
              <h2>{t("passengerTitle")}</h2>
              <p>{t("passengerDesc1")}</p>
              <p>{t("passengerDesc2")}</p>
            </article>
            <article>
              <h2>{t("cargoTitle")}</h2>
              <p>{t("cargoDesc")}</p>
            </article>
            <article>
              <h2>{t("shippingTitle")}</h2>
              <p>{t("shppingDesc")}</p>
            </article>
          </div>
          <div className=" flex-1 flex flex-row sm:flex-col items-center justify-center gap-2">
            <div className=" p-10 bg-primary rounded-full h-[210px] w-[210px] flex justify-center items-center border-[15px] border-accent hover:border-primary hover:bg-accent">
              <img
                className=" w-full h-full object-contain"
                src={iconPassenger}
                alt="profile"
              />
            </div>
            <div className=" p-10 bg-primary rounded-full h-[210px] w-[210px] flex justify-center items-center border-[15px] border-accent hover:border-primary hover:bg-accent">
              <img
                className=" w-full h-full object-contain"
                src={iconCargo}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
