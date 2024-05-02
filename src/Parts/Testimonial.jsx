import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../css/testimonial.css";
import { FaQuoteRight } from "react-icons/fa";
const Testimonial = () => {
  const testimonials = [
    { id: 1, name: "Hussein", message: "This is the first testimonial." },
    { id: 2, name: "Zeinab", message: "This is the second testimonial." },
    { id: 3, name: "Ali", message: "This is the Third testimonial." },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials]);
  return (
    <>
      <section class=" float-up-animation section testimonial-2 gray-bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="section-title text-center">
                <h2>We served over 5000+ Patients</h2>
                <div class="divider mx-auto my-4"></div>
                <p>
                  Lets know moreel necessitatibus dolor asperiores illum
                  possimus sint voluptates incidunt molestias nostrum
                  laudantium. Maiores porro cumque quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container tetimonial-container">
          <div class="row align-items-center">
            <div class=" col-lg-12 testimonial-wrap-2">
              <Carousel
                activeIndex={index}
                onSelect={(selectedIndex, e) => setIndex(selectedIndex)}
              >
                {testimonials.map((testimonial) => (
                  <Carousel.Item key={testimonial.id}>
                    <div className="testimonial-block style-2 gray-bg">
                      <div className="testimonial-thumb-title">
                        <img
                          src={`./src/images/drimg.jpg`}
                          alt=""
                          className="img-fluid-testim"
                        />
                        <h3>{testimonial.name}</h3>
                      </div>
                      <div className="quote-text">
                        <p>{testimonial.message}</p>
                      </div>
                      <FaQuoteRight
                        style={{ color: "#39cabb", fontSize: "1.5rem" }}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
