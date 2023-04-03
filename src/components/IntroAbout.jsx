import { useTranslation } from "react-i18next";
import Avatar from "../assets/img/stefano-avatar.svg";
import CodeSnippetVector from "../assets/img/code-snippet-vector";
import CupVector from "../assets/img/cup-vector";

export default function IntroAbout() {
  const { t } = useTranslation();

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

        <img className="intro__about-avatar" src={Avatar} />
      </div>

      <CodeSnippetVector />
      <CupVector />
    </div>
  );
}
