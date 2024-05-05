import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    lng: document.querySelector("html").lang,
    fallbackLng: "en",
    returnObjects: true,
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
  });
