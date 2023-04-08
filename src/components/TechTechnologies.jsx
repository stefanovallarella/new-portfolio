import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

export default function Tech() {
  const { t } = useTranslation();

  const technologies = t("tech.technologies", { returnObjects: true });

  // const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="tech__technologies">
      <div className="tech__technologies-items-container">
        <div className="fade-start"></div>
        <div className="tech__technologies-items-content animate">
          {technologies.map((technology) => (
            <div className="tech__technologies-item">{technology}</div>
          ))}
        </div>
        <div className="fade-end"></div>
      </div>
    </div>
  );
}
