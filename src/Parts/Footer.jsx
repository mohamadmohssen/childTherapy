import React from "react";
import "../css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Footer() {
  return (
    <div>
      <section id="footer" className="section-padding">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-4">
              <div className="footer-widget footer-link">
                <h4>We concern about you to grow business rapidly.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore ipsam hic non sunt recusandae atque unde saepe nihil
                  earum voluptatibus aliquid optio suscipit nobis quia vel quod,
                  iure quae.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget footer-link">
                <h4>About</h4>
                <ul>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Service</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="#!">Team</a>
                  </li>
                  <li>
                    <a href="#!">Testimonials</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget footer-link">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#!">How it Works</a>
                  </li>
                  <li>
                    <a href="#!">Support</a>
                  </li>
                  <li>
                    <a href="#!">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#!">Report Bug</a>
                  </li>
                  <li>
                    <a href="#!">License</a>
                  </li>
                  <li>
                    <a href="#!">Terms & Condition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="footer-widget footer-text">
                <h4>Our location</h4>
                <p className="mail">
                  <p>
                    <a
                      style={{ color: "black" }}
                      href="mailto:someone@example.com"
                    >
                      <span>Mail:</span> promdise@gmail.com{" "}
                    </a>
                  </p>
                </p>

                <p>
                  <span>Location:</span> 455 West Orchard Street Kings Mountain,
                  NC 28086,NOC building
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer-copy">
                &copy; Copyright , Designed &amp; Developed by {"IUL "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
