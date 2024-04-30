import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaAngleDown, FaAnglesDown, FaBars, FaClock } from "react-icons/fa6";
import "./header.css";
//try
import React, { useState } from "react";
const Header = () => {
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
          <a className="navbar-brand order-1" href="index.html">
            <img
              className="img-fluid"
              width="100px"
              src="images/logo.png"
              alt="Logo"
            />
          </a>

          <div
            className={`collapse navbar-collapse text-center order-lg-2 order-3 ${
              collapsed ? "" : "show"
            }`}
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  onClick={() => toggleDropdown("homepage")}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen["homepage"]}
                >
                  homepage <FaAngleDown />
                </a>
                <div
                  className={`dropdown-menu ${
                    dropdownOpen["homepage"] ? "show" : ""
                  }`}
                >
                  <a className="dropdown-item" href="index-full.html">
                    Homepage Full Width
                  </a>

                  <a className="dropdown-item" href="index-full-left.html">
                    Homepage Full With Left Sidebar
                  </a>

                  <a className="dropdown-item" href="index-full-right.html">
                    Homepage Full With Right Sidebar
                  </a>

                  <a className="dropdown-item" href="index-list.html">
                    Homepage List Style
                  </a>

                  <a className="dropdown-item" href="index-list-left.html">
                    Homepage List With Left Sidebar
                  </a>

                  <a className="dropdown-item" href="index-list-right.html">
                    Homepage List With Right Sidebar
                  </a>

                  <a className="dropdown-item" href="index-grid.html">
                    Homepage Grid Style
                  </a>

                  <a className="dropdown-item" href="index-grid-left.html">
                    Homepage Grid With Left Sidebar
                  </a>

                  <a className="dropdown-item" href="index-grid-right.html">
                    Homepage Grid With Right Sidebar
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  onClick={() => toggleDropdown("about")}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen["about"]}
                >
                  About <FaAngleDown />
                </a>
                <div
                  className={`dropdown-menu ${
                    dropdownOpen["about"] ? "show" : ""
                  }`}
                >
                  <a className="dropdown-item" href="about-me.html">
                    About Me
                  </a>

                  <a className="dropdown-item" href="about-us.html">
                    About Us
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>

              <li className="nav-item dropdown">
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
              </li>

              <li className="nav-item">
                <a className="nav-link" href="shop.html">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div className="order-2 order-lg-3 d-flex align-items-center">
            <select
              className="m-2 border-0 bg-transparent"
              id="select-language"
            >
              <option id="en" value="" selected>
                En
              </option>
              <option id="fr" value="">
                Fr
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
    </header>
  );
};

export default Header;
