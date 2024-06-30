import React from "react";
import "../css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <section id="footer" className="section-padding">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-4">
              <div className="footer-widget footer-link">
                <h4>RAISE:</h4>
                <p>
                  {t("Reliable Arabic Instruments for Support and Evaluation")}
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget footer-link">
                <h4>{t("About")}</h4>
                <ul>
                  <li>
                    <a href="/aboutus">{t("About Us")}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget footer-link">
                <h4>{t("Quick Links")}</h4>
                <ul>
                  <li>
                    <a href="/test">{t("Test")}</a>
                  </li>
                  <li>
                    <a href="/contactus">{t("Contact Us")}</a>
                  </li>
                  <li>
                    <a href="/aboutus">{t("About Us")}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="footer-widget footer-text">
                <h4>{t("Our location")}</h4>
                <p className="mail">
                  <p>
                    <a
                      style={{ color: "black" }}
                      href="mailto:samaideleb@gmail.com"
                    >
                      <span>{t("Mail:")}</span> samaideleb@gmail.com
                    </a>
                  </p>
                </p>

                <p>
                  <span>{t("Location:")}</span>{" "}
                  {t("Beirut - Airport Road - Al Atrash Center - 2 floor")}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer-copy">
                &copy; Copyright , Designed &amp; Developed by {"IUL"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
