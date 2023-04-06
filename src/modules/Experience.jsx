import { useTranslation } from "react-i18next";
import ExperienceItem from "../components/ExperienceItem";

export default function Experience() {
  const { t } = useTranslation();

  const experiences = t("experience.experiences", { returnObjects: true });

  return (
    <div id="work" className="experience global-max-width">
      <div className="experience__container">
        <h2 className="experience__title">
          {t("experience.title")}
          <span className="experience__title-dot">.</span>
        </h2>

        {experiences.map((experience) => (
          <ExperienceItem experience={experience} />
        ))}
      </div>
    </div>
  );
}
