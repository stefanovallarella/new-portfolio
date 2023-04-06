import ExperienceItemContentProjects from "./ExperienceItemContentProjects";
import ExperienceItemContentStack from "./ExperienceItemContentStack";

export default function ExperienceItemContent({ experience }) {
  return (
    <div className="experience-item__content">
      <p className="experience-item__content-title">
        {experience.title}
        <span className="experience-item__content-company">
          @ {experience.company}
        </span>
      </p>
      <div className="experience-item__content-location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="15"
          viewBox="0 0 13 15"
          fill="none"
        >
          <path
            d="M6.15561 0C4.57642 0.00178658 3.06242 0.634501 1.94577 1.75933C0.829109 2.88416 0.200992 4.40925 0.199219 6C0.199219 8.44125 1.95859 10.4685 3.8222 12.6143C4.41188 13.2937 5.02241 13.9965 5.56593 14.7075C5.63548 14.7984 5.72482 14.872 5.82705 14.9226C5.92928 14.9733 6.04169 14.9996 6.15561 14.9996C6.26954 14.9996 6.38195 14.9733 6.48418 14.9226C6.58641 14.872 6.67574 14.7984 6.7453 14.7075C7.28882 13.9965 7.89935 13.2937 8.48903 12.6143C10.3526 10.4685 12.112 8.44125 12.112 6C12.1102 4.40925 11.4821 2.88416 10.3655 1.75933C9.24881 0.634501 7.7348 0.00178658 6.15561 0ZM6.15561 8.25C5.71384 8.25 5.28199 8.11804 4.91467 7.87081C4.54734 7.62357 4.26105 7.27217 4.09199 6.86104C3.92293 6.4499 3.8787 5.9975 3.96488 5.56105C4.05107 5.12459 4.2638 4.72368 4.57619 4.40901C4.88857 4.09434 5.28657 3.88005 5.71985 3.79323C6.15314 3.70642 6.60225 3.75097 7.01039 3.92127C7.41854 4.09157 7.76739 4.37996 8.01282 4.74997C8.25826 5.11998 8.38926 5.55499 8.38926 6C8.38926 6.59674 8.15393 7.16903 7.73504 7.59099C7.31615 8.01295 6.74801 8.25 6.15561 8.25Z"
            fill="#E34234"
          />
        </svg>

        <p>{experience.location}</p>
      </div>

      <ExperienceItemContentProjects experience={experience} />
      <ExperienceItemContentStack stack={experience.stack} />
    </div>
  );
}
