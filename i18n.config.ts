import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, hi } from "./src/translations/index";
//empty for now
const resources = {
    en: {
        translation: en,
    },
    hi: {
        translation: hi,
    },
};

console.log('My Language', en)

i18n
    .use(initReactI18next) // Pass i18n instance to initReactI18next
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
