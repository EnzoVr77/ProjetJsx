import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const chiffresFr = [
  "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix",
  "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf",
  "vingt", "vingt-et-un", "vingt-deux", "vingt-trois", "vingt-quatre"
];

const chiffresEn = [
  "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
  "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four"
];

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % chiffresFr.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleLang = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const chiffres = i18n.language === "fr" ? chiffresFr : chiffresEn;
  const suffix = i18n.language === "fr" ? "heures" : "hours";
  const currentFlag = i18n.language === "fr" ? "🇫🇷" : "🇬🇧";

  return (
      <nav className="bg-black text-white px-6 py-3 fixed top-0 left-0 w-full flex items-center justify-between z-50">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-purple-500 text-2xl">♥</span>
            <h1 className="font-bold uppercase">
              {chiffres[currentIndex]}-{suffix}
            </h1>
          </Link>
          <Link to="/albums" className="hover:text-purple-300">{t('albums')}</Link>
          <Link to="/artistes" className="hover:text-purple-300">{t('artists')}</Link>
        </div>

        <button
            onClick={toggleLang}
            className="text-2xl hover:scale-110 transition"
            title={i18n.language === "fr" ? "Passer en anglais" : "Switch to French"}
        >
          {currentFlag}
        </button>
      </nav>
  );
}
