import Intro from "./modules/Intro";
import Experience from "./modules/Experience";
import Tech from "./modules/Tech";
import About from "./modules/About";
import Quotes from "./modules/Quotes";
import Footer from "./modules/Footer";
import MobileMenu from "./modules/MobileMenu";
// import SocialMedia from "./components/SocialMedia";
import "./assets/styles/App.css";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./translations/en.json";
import esTranslations from "./translations/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <div className="main">
      <Intro />
      <hr className="main__hr" />
      <Experience />
      {/* <hr className="main__hr" /> */}
      <Tech />
      {/* <hr className="main__hr" /> */}
      <About />
      <Quotes />
      <hr className="main__hr" />
      <Footer />
      <MobileMenu />
      {/* <SocialMedia /> */}
    </div>
  );
}

export default App;
