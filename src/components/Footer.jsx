import React from "react";
import { nesmaLogo } from "../constants/images";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <footer className="p-4 bg-primary">
      <div className="wrapper max-w-[1290px] w-full m-auto flex flex-col sm:flex-row gap-3 justify-between items-center text-white text-sm">
        <small className="left">
          {t("copyright")} &copy; {new Date().getFullYear()} |{" "}
          {t("company-name")}
        </small>
        <div className="right">
          <div className="logo flex items-center justify-center gap-2">
            <img className="w-12 " src={nesmaLogo} alt="" />
            <small>{t("nesma")}</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
