import { useState } from "react";
import { useTranslation } from "react-i18next";
import UsaFlag from "../assets/img/usa-flag.png";
import ArgFlag from "../assets/img/arg-flag.png";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  const { i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
    setLanguage(language);
  }

  return (
    <div className="language">
      <a
        className="language__option"
        style={{
          fontWeight: language === "en" ? "bold" : "normal",
          pointerEvents: language === "en" ? "none" : "auto",
        }}
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </a>
      <span className="language__separator">/</span>
      <a
        className="language__option"
        style={{
          fontWeight: language === "es" ? "bold" : "normal",
          pointerEvents: language === "es" ? "none" : "auto",
        }}
        onClick={() => handleChangeLanguage("es")}
      >
        ES
      </a>
      <img
        className="language__flag"
        src={language == "en" ? UsaFlag : ArgFlag}
      />
    </div>
  );
}
