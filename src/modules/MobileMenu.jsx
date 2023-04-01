import HamburgerSvg from "../assets/img/hamburger-svg";
import CrossSvg from "../assets/img/cross-svg";
import { useState } from "react";

export default function MenuMobileSwitcher() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      {isMenuOpen ? <CrossSvg /> : <HamburgerSvg />}
    </div>
  );
}
