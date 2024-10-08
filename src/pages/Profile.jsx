import React from "react";
import { bannerAbout, imgProfile } from "../constants/images";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation(["profile"]);
  const {
    paragraph1,
    paragraph2,
    point1,
    point2,
    point3,
    point4,
    paragraph3,
    paragraph4,
  } = t("description");
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
            {/* <p>{paragraph3}</p> */}
            <ul className=" list-disc list-inside pl-5 text-base font-light italic text-primary">
              <li>{point1}</li>
              <li>{point2}</li>
              <li>{point3}</li>
              <li>{point4}</li>
            </ul>

            {/* <p>{paragraph4}</p> */}
          </div>
          <div className=" flex-1">
            <img src={imgProfile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
