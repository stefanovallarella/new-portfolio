import { useTranslation } from "react-i18next";
import ArrowLinkVector from "../assets/img/arrow-link-vector";
import CopyrightVector from "../assets/img/copyright-vector";
import SpanishCv from "../cv/spanish-cv-stefano-vallarella.pdf";
import EnglishCv from "../cv/english-cv-stefano-vallarella.pdf";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div id="contact" className="footer global-max-width">
      <div className="footer__container">
        <h2 className="footer__title">{t("footer.title")}</h2>
        <div className="footer__email">
          <a
            href="mailto:stefanovallarella@gmail.com"
            className="footer__email-link"
          >
            stefanovallarella@gmail.com{" "}
            <span className="footer__email-link-arrow">
              <ArrowLinkVector width={12} height={11} />
            </span>
          </a>
        </div>

        <div className="footer__social">
          <div className="footer__social-item">
            <p className="footer__social-title">Linkedin</p>{" "}
            <div className="footer__social-hr"></div>{" "}
            <a
              className="footer__social-link"
              href="https://www.linkedin.com/in/stefanovallarella"
              target="_blank"
              rel="noreferrer"
            >
              in/stefanovallarella <ArrowLinkVector />
            </a>
          </div>
        </div>
        <div className="footer__social">
          <div className="footer__social-item">
            <p className="footer__social-title">Github</p>{" "}
            <div className="footer__social-hr"></div>{" "}
            <a
              className="footer__social-link"
              href="https://github.com/stefanovallarella"
              target="_blank"
              rel="noreferrer"
            >
              @stefanovallarella <ArrowLinkVector />
            </a>
          </div>
        </div>
        <div className="footer__social">
          <div className="footer__social-item">
            <p className="footer__social-title">{t("footer.resume")}</p>{" "}
            <div className="footer__social-hr"></div>{" "}
            <a
              className="footer__social-link"
              href={i18n.language === "en" ? EnglishCv : SpanishCv}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("footer.download")} <ArrowLinkVector />
            </a>
          </div>
        </div>

        <div className="footer__copyright">
          <div className="footer__copyright-text">
            {t("footer.copyright")} <CopyrightVector /> Stefano Vallarella
          </div>
          <p className="footer__copyright-year">2023</p>
        </div>
      </div>
    </div>
  );
}
