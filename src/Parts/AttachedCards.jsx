// src/components/AttachedCards.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/attachedcards.css";
import { useEffect } from "react";
import { MdContactSupport } from "react-icons/md";
import { RiSurveyLine } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const AttachedCards = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const floatingComponents = document.querySelectorAll(".float-up-animation");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    floatingComponents.forEach((component) => {
      observer.observe(component);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="feature-block d-lg-flex float-up-animation">
              <div
                className="feature-item mb-5 mb-lg-0"
                style={{ backgroundColor: "#39cabb" }}
              >
                <div
                  className="feature-icon mb-4"
                  style={{
                    fontSize: "50px",
                    display: "grid",
                    justifyContent: "center",
                  }}
                >
                  <MdContactSupport />
                </div>
                <span>{t("24 Hours Service")}</span>
                <h4 className="mb-3">{t("Get in touch")}</h4>
                <p className="mb-4">{t("You can contact us all the time")}</p>
                <a href="/contactus" className="btn btn-main btn-round-full">
                  {t("Contact Us")}
                </a>
              </div>

              <div
                className="feature-item mb-5 mb-lg-0"
                style={{ backgroundColor: "#aeeae4" }}
              >
                <div
                  className="feature-icon mb-4"
                  style={{
                    fontSize: "50px",
                    display: "grid",
                    justifyContent: "center",
                  }}
                >
                  <RiSurveyLine />
                </div>
                <span>{t("Questions")}</span>
                <h4 className="mb-3">{t("Make Test")}</h4>
                <p className="mb-4">{t("You can contact us all the time")}</p>
                <a href="/test" className="btn btn-main btn-round-full">
                  {t("Test")}
                </a>
              </div>

              <div
                className="feature-item mb-5 mb-lg-0"
                style={{ backgroundColor: "#39cabb" }}
              >
                <div
                  className="feature-icon mb-4"
                  style={{
                    fontSize: "50px",
                    display: "grid",
                    justifyContent: "center",
                  }}
                >
                  <GiSandsOfTime />
                </div>
                <span>{t("Comming Soon")}</span>
                <h4 className="mb-3">{t("New features")}</h4>
                <p>
                  {t(
                    "Exciting new features are coming soon, including a variety of engaging questions!"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttachedCards;
