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
            <h3 className="mt-5">General Questions</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="accordion" id="accordion_general_1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_general_1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_general_1"
                    aria-expanded="true"
                    aria-controls="collapse_general_1"
                  >
                    What types of assessments and tools do you offer?
                  </button>
                </h2>
                <div
                  id="collapse_general_1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading_general_1"
                  data-bs-parent="#accordion_general_1"
                >
                  <div className="accordion-body">
                    <strong>
                      We offer a wide range of diagnostic and evaluation tools
                      in the field of speech and language therapy. We also offer
                      manuals on therapy as well as other sources of
                      information.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_general_2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_general_2"
                    aria-expanded="false"
                    aria-controls="collapse_general_2"
                  >
                    Who can benefit from your resources?
                  </button>
                </h2>
                <div
                  id="collapse_general_2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading_general_2"
                  data-bs-parent="#accordion_general_1"
                >
                  <div className="accordion-body">
                    <strong>
                      Speech therapists, parents, special education teachers,
                      caregivers, and other professionals working with
                      individuals with speech or language disorders.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_general_3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_general_3"
                    aria-expanded="false"
                    aria-controls="collapse_general_3"
                  >
                    How do I know which products are right for my needs?
                  </button>
                </h2>
                <div
                  id="collapse_general_3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading_general_3"
                  data-bs-parent="#accordion_general_1"
                >
                  <div className="accordion-body">
                    <strong>
                      We provide product descriptions for each product launched
                      on the website. Additionally, if you need any assistance
                      in making your decision, our support team will help you
                      out.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="accordion_general_2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_general_4">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_general_4"
                    aria-expanded="true"
                    aria-controls="collapse_general_4"
                  >
                    If am a parent, can I use your materials/products at home?
                  </button>
                </h2>
                <div
                  id="collapse_general_4"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading_general_4"
                  data-bs-parent="#accordion_general_2"
                >
                  <div className="accordion-body">
                    <strong>
                      Yes, we made sure that these materials are suitable for
                      use at home. Materials come with instructions that make it
                      easier for parents to guide their children while learning
                      or practicing.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_general_5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_general_5"
                    aria-expanded="false"
                    aria-controls="collapse_general_5"
                  >
                    If am a specialist, how can I put your materials/products
                    into practice in my current therapy sessions?
                  </button>
                </h2>
                <div
                  id="collapse_general_5"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading_general_5"
                  data-bs-parent="#accordion_general_2"
                >
                  <div className="accordion-body">
                    <strong>
                      Our products enhance the existing methods of therapy you
                      may already be using. They can be used as part of an
                      assessment and during therapy sessions. Every product
                      comes with instructions for application.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="row py-5">
          <div className="col-12 text-center">
            <h3 className="mt-5">Research Use</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-md-2"></div>
          <div className="col">
            <div className="accordion" id="accordion_research_1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_research_1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_research_1"
                    aria-expanded="true"
                    aria-controls="collapse_research_1"
                  >
                    Can your materials be used for research purposes?
                  </button>
                </h2>
                <div
                  id="collapse_research_1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading_research_1"
                  data-bs-parent="#accordion_research_1"
                >
                  <div className="accordion-body">
                    <strong>
                      Our products can be used for research purposes and can
                      support research studies. However, written permission
                      should be granted, and the conditions of use will be
                      discussed per product. For further information, our team
                      is ready to assist.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_research_2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_research_2"
                    aria-expanded="false"
                    aria-controls="collapse_research_2"
                  >
                    Are there any specific guidelines for using your materials
                    in research studies?
                  </button>
                </h2>
                <div
                  id="collapse_research_2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading_research_2"
                  data-bs-parent="#accordion_research_1"
                >
                  <div className="accordion-body">
                    <strong>
                      Specific guidelines will be defined for each product and
                      can be requested by our support team. Of course, we
                      request that you follow the recommended ethical guidelines
                      and give appropriate credit to the authors.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_research_3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_research_3"
                    aria-expanded="false"
                    aria-controls="collapse_research_3"
                  >
                    How should I cite your materials/products in my research
                    paper?
                  </button>
                </h2>
                <div
                  id="collapse_research_3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading_research_3"
                  data-bs-parent="#accordion_research_1"
                >
                  <div className="accordion-body">
                    <strong>
                      Each item has its citation format recommended by us. Where
                      there is no format provided, please contact us on how to
                      cite them correctly.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 col-md-2"></div>
        </div>

        {/* section 3 */}

        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row py-5 w-100">
            <div className="col-12 text-center">
              <h3 className="mt-5">Ordering and Shipping</h3>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-12 col-md-6">
              <div className="accordion" id="accordion_product_1">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading_product_1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_product_1"
                      aria-expanded="true"
                      aria-controls="collapse_product_1"
                    >
                      How do I place an order?
                    </button>
                  </h2>
                  <div
                    id="collapse_product_1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading_product_1"
                    data-bs-parent="#accordion_product_1"
                  >
                    <div className="accordion-body">
                      <strong>
                        You can place an order directly through our website by
                        adding items to your cart and proceeding to checkout.
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading_product_2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_product_2"
                      aria-expanded="false"
                      aria-controls="collapse_product_2"
                    >
                      What payment methods do you accept?{" "}
                    </button>
                  </h2>
                  <div
                    id="collapse_product_2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading_product_2"
                    data-bs-parent="#accordion_product_1"
                  >
                    <div className="accordion-body">
                      <strong>
                        We accept different types of payment like cards
                        (debit/credit), PayPal and some other online options
                        that are safe to use. We also, accept payments through
                        OMT and WHISH inside Lebanon. For more information,
                        please contact us.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="accordion" id="accordion_product_2">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading_product_4">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_product_4"
                      aria-expanded="true"
                      aria-controls="collapse_product_4"
                    >
                      Do you offer international shipping?
                    </button>
                  </h2>
                  <div
                    id="collapse_product_4"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading_product_4"
                    data-bs-parent="#accordion_product_2"
                  >
                    <div className="accordion-body">
                      <strong>
                        Currently, shipping services are available only in
                        Lebanon.
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading_product_5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_product_5"
                      aria-expanded="false"
                      aria-controls="collapse_product_5"
                    >
                      How long will it take to receive my order?{" "}
                    </button>
                  </h2>
                  <div
                    id="collapse_product_5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading_product_5"
                    data-bs-parent="#accordion_product_2"
                  >
                    <div className="accordion-body">
                      <strong>
                        Delivery times differ depending on your address. Orders
                        are typically processed within five to seven working
                        days.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 4 */}

        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row py-5 w-100">
            <div className="col-12 text-center">
              <h3 className="mt-5">Product Support</h3>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-12 col-md-6">
              <div className="accordion" id="accordion_product_13">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading_product_13">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_product_13"
                      aria-expanded="true"
                      aria-controls="collapse_product_13"
                    >
                      Can I get help with using the assessment tools?{" "}
                    </button>
                  </h2>
                  <div
                    id="collapse_product_13"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading_product_13"
                    data-bs-parent="#accordion_product_13"
                  >
                    <div className="accordion-body">
                      <strong>
                        Yes, we offer detailed user manuals and descriptions for
                        each product. Furthermore, our support team will always
                        be there in case of any queries or assistance needed by
                        the buyer.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="accordion" id="accordion_product_12">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading_product_4">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_product_14"
                      aria-expanded="true"
                      aria-controls="collapse_product_14"
                    >
                      Are your materials evidence-based?
                    </button>
                  </h2>
                  <div
                    id="collapse_product_14"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading_product_14"
                    data-bs-parent="#accordion_product_12"
                  >
                    <div className="accordion-body">
                      <strong>
                        All our resources have been developed based on current
                        research and best practices in speech-language therapy
                        as well as the recommended guidelines. We also provide
                        documentation regarding the validity and reliability of
                        our products.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 5  */}

        <div className="row py-5">
          <div className="col-12 text-center">
            <h3 className="mt-5">Technical Support </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-md-2"></div>
          <div className="col">
            <div className="accordion" id="accordion_research_1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading_research_1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_research_15"
                    aria-expanded="true"
                    aria-controls="collapse_research_15"
                  >
                    What should I do if I face technical issues with the
                    website?
                  </button>
                </h2>
                <div
                  id="collapse_research_15"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading_research_15"
                  data-bs-parent="#accordion_research_15"
                >
                  <div className="accordion-body">
                    <strong>
                      Please contact us in case of any technical issues; we are
                      always ready to assist.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 col-md-2"></div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
