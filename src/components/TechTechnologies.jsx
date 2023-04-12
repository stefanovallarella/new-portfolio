import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

export default function Tech() {
  const { t } = useTranslation();

  const technologies = t("tech.technologies", { returnObjects: true });

  return (
    <div className="tech-marquee">
      <Marquee className="tech-marquee__marquee">
        <div>{technologies.join(" ")}&nbsp;</div>
        <div>{technologies.join(" ")}&nbsp;</div>
      </Marquee>
    </div>
  );
}
