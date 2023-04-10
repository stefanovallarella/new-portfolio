import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { t } = useTranslation();

  function handleClick(e) {
    e.preventDefault();
    const sectionId = e.target.getAttribute("data-section-id");
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="nav">
      <div className="nav__title-container">
        <a
          href="https://www.linkedin.com/in/stefanovallarella/"
          target="_blank"
          className="nav__title"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
          >
            <path
              d="M12.8955 11.5C12.8955 17.8513 7.74678 23 1.3955 23H-1.43051e-05L-1.43051e-05 0H1.3955C7.74678 0 12.8955 5.14873 12.8955 11.5V11.5Z"
              fill="#E34234"
            />
          </svg>
          <p className="nav__title-name">Stefano Vallarella</p>
        </a>
      </div>
      <nav className="nav__container">
        <ul>
          {/* <li>
            <a href="#" data-section-id="home" onClick={handleClick}>
              {t("navbar.home")}
            </a>
          </li> */}
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
            <a href="#" without rel="noopener noreferrer" target="_blank">
              {t("footer.resume")}
            </a>
          </li>
        </ul>

        <LanguageSwitcher />
      </nav>
      <MobileMenu />
    </div>
  );
}
