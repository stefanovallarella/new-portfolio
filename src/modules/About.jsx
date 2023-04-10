import { useTranslation } from "react-i18next";
import RoundedRectangleVector from "../assets/img/rounded-rectangle-vector";
import QuarterVector from "../assets/img/quarter-vector";

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="about global-max-width">
      <div className="about__container">
        <h2 className="about__title">
          {t("about.title")}
          <span className="about__title-dot">.</span>
        </h2>

        <p className="about__description">{t("about.description")}</p>
      </div>
      <RoundedRectangleVector />
      <QuarterVector />
    </div>
  );
}
