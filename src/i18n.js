import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataEn from "./locale/En.json";
import dataFr from "./locale/Fr.json";
const resources = {
  en: {
    translation: dataEn,
  },
  fr: {
    translation: dataFr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
