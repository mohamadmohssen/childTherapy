import React from "react";
import "../css/faq.css";
const Faq = () => {
  return (
    <div>
      <section id="faq" className="container py-3">
        <div className="row py-5">
          <div className="col-12 text-center">
            <h2 className="display-6">
              <b>Frequently Asked Questions</b>
            </h2>
            <p className="">
              Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              consequuntur!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="accordion" id="accordion_1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_1"
                    aria-expanded="true"
                    aria-controls="collapse_1"
                  >
                    Why We Are Best?
                  </button>
                </h2>
                <div
                  id="collapse_1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading_1"
                  data-bs-parent="#accordion_1"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_2"
                    aria-expanded="false"
                    aria-controls="collapse_2"
                  >
                    How We Build Website?
                  </button>
                </h2>
                <div
                  id="collapse_2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading_2"
                  data-bs-parent="#accordion_1"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_3"
                    aria-expanded="false"
                    aria-controls="collapse_3"
                  >
                    How long we take to build?
                  </button>
                </h2>
                <div
                  id="collapse_3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading_3"
                  data-bs-parent="#accordion_1"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="accordion_2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_4">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_4"
                    aria-expanded="true"
                    aria-controls="collapse_4"
                  >
                    This is a question?
                  </button>
                </h2>
                <div
                  id="collapse_4"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading_4"
                  data-bs-parent="#accordion_2"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_5"
                    aria-expanded="false"
                    aria-controls="collapse_5"
                  >
                    This is a question?
                  </button>
                </h2>
                <div
                  id="collapse_5"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading_5"
                  data-bs-parent="#accordion_2"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_6">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_6"
                    aria-expanded="false"
                    aria-controls="collapse_6"
                  >
                    This is a question?
                  </button>
                </h2>
                <div
                  id="collapse_6"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading_6"
                  data-bs-parent="#accordion_2"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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

export default Faq;
