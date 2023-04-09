import { useTranslation } from "react-i18next";
import TechTechnologies from "../components/TechTechnologies";

export default function Tech() {
  const { t } = useTranslation();

  return (
    <div className="tech global-max-width">
      <h2 className="tech__title">
        {t("tech.title")}
        <span className="tech__title-dot">.</span>
      </h2>
      <div class="tech__slider">
        <TechTechnologies />
      </div>
    </div>
  );
}
