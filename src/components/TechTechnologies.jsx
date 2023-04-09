import { useTranslation } from "react-i18next";

export default function Tech() {
  const { t } = useTranslation();

  const technologies = t("tech.technologies", { returnObjects: true });

  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide slide--first">{technologies.join(" ")}</div>
        <div className="slide slide--last">{technologies.join(" ")}</div>
      </div>
    </div>
  );
}
