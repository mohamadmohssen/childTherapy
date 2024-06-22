import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../css/testimonial.css";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M., Mother of a 4-year-old",
      message:
        "As a parent, I was constantly worried about my child's speech development. This app provided me with an easy-to-use tool to assess my child's communication skills. The detailed classification and helpful resources have been a game-changer for our family. We now have a clear understanding of our child's needs and how to support their development.",
      imgSrc: "./src/images/test3jpeg.jpeg", // Adjust this path as per your image location
    },
    {
      id: 2,
      name: "Dr. Emily R., Speech-Language Pathologist",
      message:
        "As a speech therapist, I highly recommend this website to parents and caregivers. The questionnaire is thorough yet straightforward, and the classification results are incredibly accurate. It's a fantastic resource for early detection of speech and language disorders, allowing for timely intervention. The app has truly made a difference in the lives of many children I work with.",
      imgSrc: "./src/images/test1.png", // Adjust this path as per your image location
    },
    {
      id: 3,
      name: " John D., Father of a 3-year-old",
      message:
        "This application has been a valuable tool for our family. The survey was simple to complete, and the results were insightful. The classifications helped us understand where our child stands and what steps to take next. The additional resources and tips provided are a wonderful bonus. I appreciate how the app empowers parents with knowledge and support.",
      imgSrc: "./src/images/test.jpeg", // Adjust this path as per your image location
    },
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
      <section className="float-up-animation section testimonial-2 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>We served over 5000+ Patients</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  Lets know moreel necessitatibus dolor asperiores illum
                  possimus sint voluptates incidunt molestias nostrum
                  laudantium. Maiores porro cumque quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container testimonial-container">
          <div className="row align-items-center">
            <div className="col-lg-12 testimonial-wrap-2">
              <Carousel
                activeIndex={index}
                onSelect={(selectedIndex, e) => setIndex(selectedIndex)}
                indicators={false} // Hide carousel indicators
                controls={false} // Hide carousel controls
              >
                {testimonials.map((testimonial) => (
                  <Carousel.Item key={testimonial.id}>
                    <div className="testimonial-block style-2 gray-bg">
                      <div className="testimonial-thumb-title">
                        <img
                          src={testimonial.imgSrc}
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
