import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/attachedcards.css";
import { useEffect } from "react";
import { MdContactSupport } from "react-icons/md";
import { RiSurveyLine } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";

import { FaClock, FaUserDoctor } from "react-icons/fa6";
const AttachedCards = () => {
  /*This use effect is for let the component float up when scrollin to it*/
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
    <section class="features">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="feature-block d-lg-flex float-up-animation">
              <div
                class="feature-item mb-5 mb-lg-0"
                style={{ backgroundColor: "#39cabb" }}
              >
                <div
                  class="feature-icon mb-4"
                  style={{
                    fontSize: "50px",
                    display: "grid",
                    justifyContent: "center",
                  }}
                >
                  <MdContactSupport />
                </div>
                <span>24 Hours Service</span>
                <h4 class="mb-3">Get in touch </h4>
                <p class="mb-4">You can Contact us all time</p>
                <a href="/contactus" class="btn btn-main btn-round-full">
                  Contact us
                </a>
              </div>

              <div
                class="feature-item mb-5 mb-lg-0"
                style={{ backgroundColor: "#aeeae4" }}
              >
                <div
                  class="feature-icon mb-4"
                  style={{
                    fontSize: "50px",
                    display: "grid",
                    justifyContent: "center",
                  }}
                >
                  <RiSurveyLine />
                </div>
                <span>Questions</span>
                <h4 class="mb-3"> Make Test </h4>
                <p class="mb-4">You can Contact us all time</p>
                <a href="/test" class="btn btn-main btn-round-full">
                  Test
                </a>
              </div>

              <div
                class="feature-item mb-5 mb-lg-0"
                style={{ backgroundColor: "#39cabb" }}
              >
                <div
                  class="feature-icon mb-4"
                  style={{
                    fontSize: "50px",
                    display: "grid",
                    justifyContent: "center",
                  }}
                >
                  <GiSandsOfTime />
                </div>
                <div class="feature-icon mb-4">
                  <i class="icofont-support"></i>
                </div>
                <span>Comming Soon</span>
                <h4 class="mb-3">New features</h4>
                <p>
                  Exciting new features are coming soon, including a variety of
                  engaging questions!
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
