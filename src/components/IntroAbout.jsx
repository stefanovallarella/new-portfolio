import { useTranslation } from "react-i18next";
import AvatarPrimary from "../assets/img/stefano-avatar-primary.svg";
import AvatarSecondary from "../assets/img/stefano-avatar-secondary.svg";
import CodeSnippetVector from "../assets/img/code-snippet-vector";
import CupVector from "../assets/img/cup-vector";

export default function IntroAbout() {
  const { t, i18n } = useTranslation();

  return (
    <div className="intro__about-container global-max-width">
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

        <img
          className="intro__about-avatar"
          src={i18n.language === "en" ? AvatarPrimary : AvatarSecondary}
        />
      </div>

      <CodeSnippetVector />
      <CupVector />
    </div>
  );
}
