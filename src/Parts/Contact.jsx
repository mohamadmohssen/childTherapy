import React from "react";
import "../css/contact.css";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">{t("Get in touch")}</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        {t("Your message was sent, thank you!")}
                      </div>
                      <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              type="hidden"
                              name="access_key"
                              value="b571a6d0-c79f-49e8-9234-b6c854e6d458"
                            />
                            <div className="form-group">
                              <label className="label" htmlFor="name">
                                {t("Full Name")}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="Full-Name"
                                id="name"
                                placeholder={t("Full Name")}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email">
                                {t("Email Address")}
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder={t("Email")}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">
                                {t("Subject")}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder={t("Subject")}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="message">
                                {t("Message")}
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder={t("Message")}
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center mt-3">
                            <div className="form-group">
                              <input
                                type="submit"
                                value={t("Send Message")}
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                      <h3>{t("Let's get in touch")}</h3>
                      <p className="mb-4">
                        {t(
                          "We're open for any suggestion or just to have a chat"
                        )}
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span>
                            <FaLocationDot />
                          </span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>{t("Address")}:</span>
                            {t(
                              "Beirut - Airport Road - Al Atrash Center - 2 floor"
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span>
                            <FaPhone />
                          </span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>{t("Phone")}:</span>
                            <a href="tel://0096181431745">+961 81 431 745</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span>
                            <FaEnvelope />
                          </span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>{t("Email")}:</span>
                            <a href="mailto:samaideleb@gmail.com">
                              samaideleb@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
