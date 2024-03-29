import ExperienceItemContent from "./ExperienceItemContent";
import { useTranslation } from "react-i18next";

export default function ExperienceItem({ experience, i }) {
  const { t } = useTranslation();

  return (
    <div className="experience-item">
      <div className="experience-item__year">
        {i === 0 ? (
          <div className="experience-item__present">
            <div className="experience-item__present-circle"></div>
            {t("experience.end")}
          </div>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              className="experience-item__year-semicircle"
            >
              <path
                d="M10.8052 9.61227C10.8052 14.4882 6.85246 18.4409 1.97653 18.4409H0.977124L0.977124 0.783623H1.97653C6.85246 0.783623 10.8052 4.73634 10.8052 9.61227Z"
                fill="#0E0F4D"
              />
            </svg>
            <span className="experience-item__year-text" key={experience.id}>
              {experience.date}
            </span>
          </>
        )}

        <div className="experience-item__year-line"></div>
      </div>

      <ExperienceItemContent experience={experience} />
    </div>
  );
}
