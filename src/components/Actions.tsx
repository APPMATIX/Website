import { useState, useEffect } from "react";
import "./Actions.css";
import Phone from "/assets/icons/phone.svg";
import Lens from "/assets/icons/Lens.svg";
import More from "/assets/icons/More.svg";

const Actions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const actionItems = [{ icon: Phone }, { icon: Lens }, { icon: More }];

  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      {/* --- Hamburger Menu Icon (Mobile Only & Made with CSS) --- */}
      <div
        className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        role="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* --- Desktop Actions --- */}
      <div className="actions desktop-actions">
        {actionItems.map((actionItem, index) => (
          <img key={index} src={actionItem.icon} className="actionItem" alt={`Action ${index + 1}`} />
        ))}
      </div>

      {/* --- Mobile Menu (Dropdown) --- */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {actionItems.map((actionItem, index) => (
            <img key={index} src={actionItem.icon} className="actionItem" alt={`Action ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Actions;