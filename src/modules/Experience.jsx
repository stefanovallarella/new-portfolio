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

        {experiences.map((experience, i) => (
          <ExperienceItem
            experience={experience}
            key={`experience-${i}`}
            i={i}
          />
        ))}

        <div className="experience__end-container">
          <p className="experience__end">
            <span className="experience__end-circle"></span>
            {t("experience.start")}
          </p>
        </div>
      </div>
      <PhoneVector />
      <TrapezoidVector />
    </div>
  );
}
