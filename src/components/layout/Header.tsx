import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "../../data/personalInfo";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    "About",
    "Projects",
    "Experience",
    "Achievements",
    "Blog",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#hero" className="header__logo">
          <div className="header__avatar">
            <img src={personalInfo.avatar} alt="Houssem Jarray" />
          </div>
          <span className="header__logo-text">Houssem Jarray</span>
        </a>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="header__nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;