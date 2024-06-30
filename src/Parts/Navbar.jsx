// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa6";
import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem("language", lng); // Save language preference to local storage
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <header
      className="navigation fixed-top"
      style={{ backgroundColor: "white", paddingBottom: 0 }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-white">
          <a className="navbar-brand order-1" href="/">
            <img src="/src/images/navlogo.jpg" alt="" width={100} />
          </a>

          <div
            className={`collapse navbar-collapse text-center order-lg-2 order-3 ${
              collapsed ? "" : "show"
            }`}
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Test">
                  {t("Test")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  {t("About Us")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  {t("Contact Us")}
                </a>
              </li>
            </ul>
          </div>

          <div className="order-2 order-lg-3 d-flex align-items-center">
            <select
              className="language-selector m-2 border-0"
              id="select-language"
              value={language} // Set the selected language
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">En</option>
              <option value="ar">Ar</option>
            </select>
          </div>
          <button
            className="navbar-toggler collapsed order-2"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
