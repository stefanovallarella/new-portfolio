import HamburgerSvg from "../assets/img/hamburger-svg";
import CrossSvg from "../assets/img/cross-svg";
import { useState } from "react";

export default function MenuMobileSwitcher() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu">
      <div
        className={`mobile-menu__icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <CrossSvg /> : <HamburgerSvg />}
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className={`mobile-menu__overlay ${
            isMenuOpen ? "mobile-menu__overlay--visible" : ""
          }`}
        >
          <ul>
            <li>Section 1</li>
            <li>Section 2</li>
            <li>Section 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
