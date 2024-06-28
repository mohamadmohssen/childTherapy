import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/barai.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const BarAutoIncrement = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.dataset.count;
        const duration = 8000;
        const totalSteps = 100;
        const step = Math.ceil(target / totalSteps);

        let currentCount = 0;
        const updateCount = () => {
          currentCount += step;
          if (currentCount >= target) {
            clearInterval(interval);
            currentCount = target;
          }
          counter.textContent = currentCount;
        };

        updateCount();

        const interval = setInterval(updateCount, duration / totalSteps);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    const ctaSection = document.querySelector(".cta-section");
    observer.observe(ctaSection);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="cta-section float-up-animation">
      <div className="container">
        <div className="cta position-relative">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-stat">
                <strong>
                  <i className="icofont-doctor"></i>
                  <span
                    className="h3 counter txt-inside-counter"
                    data-count="58"
                  >
                    0
                  </span>
                  k<p className="txt-inside-counter">{t("Happy People")}</p>
                </strong>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-stat">
                <strong>
                  <i className="icofont-flag"></i>
                  <span
                    className="h3 counter txt-inside-counter"
                    data-count="70"
                  >
                    0
                  </span>
                  +
                  <p className="txt-inside-counter">{t("Surgery Completed")}</p>
                </strong>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="counter-stat">
                <strong>
                  <i className="icofont-badge"></i>
                  <span
                    className="h3 counter txt-inside-counter"
                    data-count="40"
                  >
                    0
                  </span>
                  +<p className="txt-inside-counter">{t("Expert Doctors")}</p>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarAutoIncrement;
