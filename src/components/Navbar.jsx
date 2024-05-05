import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
// import logo from '../../img/logo.png';
import { logo } from "../constants/images";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation(["common"]);
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header className="header__middle bg-white  h-[90px] flex items-center justify-between shadow-lg sticky top-0">
      <div className="container max-w-[1290px] w-full m-auto flex justify-between items-center">
        <div className="left relative flex justify-between w-full">
          {/* Add Logo  */}
          <div className="header__middle__logo drop-shadow-lg">
            <NavLink exact activeClassName="is-active" to="/">
              <img className=" w-36" src={logo} alt="logo" />
            </NavLink>
          </div>

          <div className="header__middle__menus font-roboto italic font-medium">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <IoMdClose />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignJustify />{" "}
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link to="#">
                    {" "}
                    {t("about")} <FiChevronDown />{" "}
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/profile`}
                      >
                        {" "}
                        {t("profile")}{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/history`}
                      >
                        {" "}
                        {t("history")}{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/partners`}
                      >
                        {" "}
                        {t("partners")}{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/services`}
                  >
                    {" "}
                    {t("services")}{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/fleets`}
                  >
                    {" "}
                    {t("fleets")}{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to="https://careers.nesma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {t("career")}{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Contact`}
                  >
                    {" "}
                    {t("contact")}{" "}
                  </NavLink>{" "}
                </li>
                <li className="text-center flex justify-center items-center">
                  <LanguageSelector />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
