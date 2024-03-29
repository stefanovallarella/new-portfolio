import { useTranslation } from "react-i18next";
import HamburgerSvg from "../assets/img/hamburger-svg";
import CrossSvg from "../assets/img/cross-svg";
import { useState, useEffect } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import SpanishCv from "../cv/spanish-cv-stefano-vallarella.pdf";
import EnglishCv from "../cv/english-cv-stefano-vallarella.pdf";

export default function MenuMobileSwitcher() {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleClick(e) {
    e.preventDefault();
    const sectionId = e.target.getAttribute("data-section-id");
    const section = document.querySelector(`#${sectionId}`);
    toggleMenu();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <div className="mobile-menu">
      <div
        className={`mobile-menu__icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <CrossSvg /> : <HamburgerSvg />}
      </div>

      <div
        className={`mobile-menu__overlay ${
          isMenuOpen ? "mobile-menu__overlay--visible" : ""
        }`}
      >
        <ul>
          <li>
            <a href="#" data-section-id="home" onClick={handleClick}>
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a href="#" data-section-id="work" onClick={handleClick}>
              {t("navbar.work")}
            </a>
          </li>
          <li>
            <a href="#" data-section-id="about" onClick={handleClick}>
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a href="#" data-section-id="contact" onClick={handleClick}>
              {t("navbar.contact")}
            </a>
          </li>
          <li>
            <a
              href={i18n.language === "en" ? EnglishCv : SpanishCv}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("footer.resume")}
            </a>
          </li>
        </ul>

        <div className="mobile-menu__language">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
