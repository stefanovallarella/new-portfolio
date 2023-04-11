import { useTranslation } from "react-i18next";
import RoundedRectangleVector from "../assets/img/rounded-rectangle-vector";
import QuarterVector from "../assets/img/quarter-vector";
import ReactMarkdown from "react-markdown";
import remarkGemoji from "remark-gemoji";

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="about global-max-width">
      <div className="about__container">
        <h2 className="about__title">
          {t("about.title")}
          <span className="about__title-dot">.</span>
        </h2>

        <div className="about__description">
          <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGemoji]}>
            {t("about.description")}
          </ReactMarkdown>
        </div>
      </div>
      <RoundedRectangleVector />
      <QuarterVector />
    </div>
  );
}
