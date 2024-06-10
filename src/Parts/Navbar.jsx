import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaAngleDown, FaAnglesDown, FaBars, FaClock } from "react-icons/fa6";
import "../css/navbar.css";
import React, { useState } from "react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Testi18n = () => {
  return (
    <Fragment>
      <div>
        <button onClick={changeEn}>en</button>
        <button onClick={changefr}>fr</button>
      </div>
      <div>
        <h1>{t("Welcome to React")} </h1>
        <h1>{t("محمود")}</h1>
      </div>
    </Fragment>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeEn = () => {
    i18n.changeLanguage("en");
  };
  const changefr = () => {
    i18n.changeLanguage("fr");
  };

  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const toggleDropdown = (dropdownId) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownId]: !prevState[dropdownId],
    }));
  };
  return (
    <Fragment>
      <header
        className="navigation fixed-top"
        style={{
          backgroundColor: "white",
          paddingBottom: 0,
          display: "inline-block",
        }}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-white">
            <a className="navbar-brand order-1" href="/">
              <p className="title">RAISE</p>
            </a>

            <div
              className={`collapse navbar-collapse text-center order-lg-2 order-3 ${
                collapsed ? "" : "show"
              }`}
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/Test">
                    Test
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>

                {/* <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  onClick={() => toggleDropdown("pages")}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen["pages"]}
                >
                  Pages <FaAngleDown />
                </a>
                <div
                  className={`dropdown-menu ${
                    dropdownOpen["pages"] ? "show" : ""
                  }`}
                >
                  <a className="dropdown-item" href="author.html">
                    Author
                  </a>

                  <a className="dropdown-item" href="author-single.html">
                    Author Single
                  </a>

                  <a className="dropdown-item" href="advertise.html">
                    Advertise
                  </a>

                  <a className="dropdown-item" href="post-details.html">
                    Post Details
                  </a>

                  <a className="dropdown-item" href="post-elements.html">
                    Post Elements
                  </a>

                  <a className="dropdown-item" href="tags.html">
                    Tags
                  </a>

                  <a className="dropdown-item" href="search-result.html">
                    Search Result
                  </a>

                  <a className="dropdown-item" href="search-not-found.html">
                    Search Not Found
                  </a>

                  <a className="dropdown-item" href="privacy-policy.html">
                    Privacy Policy
                  </a>

                  <a className="dropdown-item" href="terms-conditions.html">
                    Terms Conditions
                  </a>

                  <a className="dropdown-item" href="404.html">
                    404 Page
                  </a>
                </div>
              </li> */}

                {/* <li className="nav-item">
                <a className="nav-link" href="shop.html">
                  Shop
                </a>
              </li> */}
              </ul>
            </div>

            <div className="order-2 order-lg-3 d-flex align-items-center">
              <select
                className="m-2 border-0 bg-transparent"
                id="select-language"
              >
                <option id="en" value="" onClick={changeEn} selected>
                  En
                </option>
                <option id="ar" value="" onClick={changefr}>
                  Ar
                </option>
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
      </header>{" "}
    </Fragment>
  );
};

export default Navbar;
