import { useTranslation } from "react-i18next";
import QuotesVector from "../assets/img/quotes-vector";

export default function Quotes() {
  const { t } = useTranslation();

  return (
    <div className="quotes global-max-width">
      <div className="quotes__item">
        {t("quotes.quote1")}
        <QuotesVector quoteClass={"quotes__item-left-quote"} />
        <QuotesVector quoteClass={"quotes__item-right-quote"} />
      </div>
      <div className="quotes__item">
        {t("quotes.quote2")}
        <QuotesVector quoteClass={"quotes__item-left-quote"} />
        <QuotesVector quoteClass={"quotes__item-right-quote"} />
      </div>
    </div>
  );
}
