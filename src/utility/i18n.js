import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

// configuration for i18next - multi-language feature

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "zh"],
    load: "languageOnly",
    fallbackLng: "en",
    debug: true,
    lowerCaseLng: true,
    detection: {
      order: ["path", "localStorage", "htmlTag"]
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    },
    keySeparator: false
  });

export default i18n;
