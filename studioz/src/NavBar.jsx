import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
// import { useTheme } from "./content/ThemeContext";
import "./styles/Header.scss";
import ThemeToggle from "./content/ThemeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isProjectClicked, setIsProjectClicked] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  //  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProjectMenu = () => {
    setIsProjectClicked(!isProjectClicked);
  };

  return (
    <header className="theme-header header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/" className="logo-text">
            {/* <img src="/logo.png" alt="Logo" className="logo-image" /> */}
            SREE SIVA BALAJI<span className="logo-domain">.ENTERPRISES</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <Link
            to="/"
            className={`nav-link ${hoveredNav === "home" ? "active" : ""}`}
            onMouseEnter={() => setHoveredNav("home")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            Home
          </Link>

          <div
            className="dropdown"
            onMouseEnter={() => {
              setIsProjectHovered(true);
              setHoveredNav("project");
            }}
            onMouseLeave={() => {
              setIsProjectHovered(false);
              setHoveredNav(null);
            }}
          >
            <div
              className={`dropdown-trigger nav-link ${
                hoveredNav === "project" ? "active" : ""
              }`}
            >
              Project
            </div>

            {isProjectHovered && (
              <div className="dropdown-menu">
                <Link to="/commercial" className="dropdown-item">
                  Commercial
                </Link>
                <Link to="/residential" className="dropdown-item">
                  Residential
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`nav-link ${hoveredNav === "about" ? "active" : ""}`}
            onMouseEnter={() => setHoveredNav("about")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${hoveredNav === "contact" ? "active" : ""}`}
            onMouseEnter={() => setHoveredNav("contact")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            Contact
          </Link>
          <ThemeToggle/>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="theme-mobile-header mobile-menu">
          <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Home
          </Link>
          <div className="mobile-dropdown">
            <div
              className="dropdown-trigger mobile-nav-link"
              onClick={toggleProjectMenu}
            >
              Project
              {isProjectClicked ? (
                <FaCaretUp className="caret-icon" />
              ) : (
                <FaCaretDown className="caret-icon" />
              )}
            </div>

            {isProjectClicked && (
              <div className="dropdown-menu">
                <Link
                  to="/commercial"
                  className="dropdown-item"
                  onClick={toggleMobileMenu}
                >
                  Commercial
                </Link>
                <Link
                  to="/residential"
                  className="dropdown-item"
                  onClick={toggleMobileMenu}
                >
                  Residential
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/about"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <div className="mobile-theme-toggle">
          <ThemeToggle/>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
