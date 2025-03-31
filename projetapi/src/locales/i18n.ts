import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            welcome: "Welcome",
            search: "Search...",
            details: "View details",
        },
    },
    fr: {
        translation: { 
            welcome: "Bienvenue",
            search: "Rechercher...",
            details: "Voir les détails",
        },
    },
};

i18n
    .use(LanguageDetector) // Détecte la langue du navigateur
    .use(initReactI18next) // Initialise react-i18next
    .init({
        resources,
        fallbackLng: 'en', // Langue par défaut
        interpolation: { escapeValue: false },
    });

export default i18n;
