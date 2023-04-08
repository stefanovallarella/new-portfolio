import { useTranslation } from "react-i18next";
import ExperienceItem from "../components/ExperienceItem";
import PhoneVector from "../assets/img/phone-vector";
import TrapezoidVector from "../assets/img/trapezoid-vector";

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

        <div className="experience__end">
          <div className="experience__end-circle"></div>
          {t("experience.end")}
        </div>
      </div>
      <PhoneVector />
      <TrapezoidVector />
    </div>
  );
}
