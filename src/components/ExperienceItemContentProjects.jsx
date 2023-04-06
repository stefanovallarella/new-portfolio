export default function ExperienceItemContentProjects({ experience }) {
  return (
    <div className="experience-item__content-projects">
      <p className="experience-item__content-projects-intro">
        {experience.intro}{" "}{experience.company}
      </p>
      {experience.projects.map((project) => (
        <div className="experience-item__content-project">
          <div className="experience-item__content-project-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
            >
              <path
                d="M6.1416 6C6.1416 9.28963 3.47483 12 0.185206 12L0.185206 0C3.47483 0 6.1416 2.71037 6.1416 6Z"
                fill="#E34234"
              />
            </svg>
          </div>

          <p className="experience-item__content-project-item">{project}</p>
        </div>
      ))}
    </div>
  );
}
