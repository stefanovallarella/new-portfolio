export default function ExperienceItemContentStack({ stack }) {
  return (
    <div className="experience-item__content-stacks">
      {stack.map((item) => (
        <div className="experience-item__content-stack">{item}</div>
      ))}
    </div>
  );
}
