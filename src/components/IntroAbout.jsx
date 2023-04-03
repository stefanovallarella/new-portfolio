import { useTranslation } from "react-i18next";
import Avatar from "../assets/img/stefano-avatar.svg";

export default function IntroAbout() {
  const { t } = useTranslation();

  return (
    <div className="intro__about-container">
      <div className="intro__about-content">
        <p className="intro__about-title intro__about-title--mobile">
          {t("introabout.title")}
        </p>
        <div className="intro__about-text">
          <p className="intro__about-title intro__about-title--desktop">
            {t("introabout.title")}
          </p>
          <p className="intro__about-description">
            {t("introabout.description")}
          </p>
        </div>

        <img className="intro__about-avatar" src={Avatar} />
      </div>
    </div>
  );
}
