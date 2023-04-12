export default function ExperienceItemContentStack({ stack }) {
  return (
    <div className="experience-item__content-stacks">
      {stack.map((item, i) => (
        <div
          className="experience-item__content-stack"
          key={`experience-item-stack-${i}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
