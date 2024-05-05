import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const languages = [
  { code: "en", lang: "English" },
  { code: "ar", lang: "العربية" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    // <div className="btn-container">
    //   {languages.map((lng) => {
    //     return (
    //       <button
    //         className={lng.code === i18n.language ? "selected" : ""}
    //         key={lng.code}
    //         onClick={() => changeLanguage(lng.code)}
    //       >
    //         {lng.lang}
    //       </button>
    //     );
    //   })}
    // </div>

    <Menu as="div" className="relative inline-block text-center">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-2 py-1.5 text-sm font-semibold text-accent shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <CiGlobe size={25} />
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-accent"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-1 rounded-md bg-white shadow-lg ring-1 ring-accent ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((lng) => {
              return (
                <Menu.Item key={lng.code}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={` p-3 block text-sm ${
                        lng.code === i18n.language
                          ? "bg-gray-100 text-primary"
                          : "text-accent "
                      }`}
                      onClick={() => changeLanguage(lng.code)}
                    >
                      {lng.lang}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSelector;
