import { useState } from "react";
import { useTranslation } from "react-i18next";
import UsaFlag from "../assets/icons/usa-flag.png";
import SpainFlag from "../assets/icons/spain-flag.png";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  const { i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
    setLanguage(language);
  }

  return (
    <div className="language-container">
      <a
        className="language-option"
        style={{ fontWeight: language === "en" ? "bold" : "normal" }}
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </a>
      <span className="language-separator">/</span>
      <a
        className="language-option"
        style={{ fontWeight: language === "es" ? "bold" : "normal" }}
        onClick={() => handleChangeLanguage("es")}
      >
        ES
      </a>
      <img
        className="language-flag"
        src={language == "en" ? UsaFlag : SpainFlag}
      />
    </div>
  );
}
