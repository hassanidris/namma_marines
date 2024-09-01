import React from "react";
import { bannerAbout, ceoImg, imgPartners } from "../constants/images";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation(["partners"]);
  const { paragraph1, paragraph2, paragraph3, paragraph4, paragraph5 } =
    t("description");
  const { line, p1, p2, p3, p4, p5, p6 } = t("list");
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
            <p>{paragraph3}</p>
            <p>{paragraph4}</p>
            <p>{paragraph5}</p>
            {/* <p>{line}</p> */}
            <ul className=" list-none list-inside mt-9 text-base font-light italic text-primary">
              <li className="list-item">{p1}</li>
              <li className="list-item">{p2}</li>
              <li>{p3}</li>
              {/* <li>{p4}</li>
              <li>{p5}</li>
              <li>{p6}</li> */}
            </ul>
            {/* <p className="pt-6">{paragraph3}</p> */}
          </div>
          <div className=" flex-1">
            <img
              src={ceoImg}
              alt="CEO"
              className=" shadow-lg border border-gray-200"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
