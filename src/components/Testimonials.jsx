import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I purchased a set of outdoor furniture from this company and I am so impressed with the durability and design. The furniture has held up well in all types of weather and the cushions are easy to clean.",
      image: "cus1.png",
    },
    {
      text: "I recently purchased a sectional sofa from this company and I have been extremely pleased with it. The fabric is high quality and the cushions are very comfortable. The delivery process was smooth and hassle-free. I highly recommend HomeVibes.",
      image: "cus2.png", 
      highlight: true,
    },
    {
      text: "I purchased a bed frame from this furniture brand and it exceeded my expectations. The quality is top-notch and the design is modern and sleek. The customer service was also fantastic, and the delivery was prompt. I highly recommend this furniture brand.",
      image: "cus3.png",
    },
  ];

  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial-card ${
            testimonial.highlight ? "highlight" : ""
          }`}
        >
          <p className="testimonial-text">“{testimonial.text}”</p>
          <img src={testimonial.image} className="avatar" />
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
