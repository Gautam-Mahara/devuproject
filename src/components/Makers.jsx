import React from "react";
import "./Makers.css";

const Makers = () => {
  return (
    <div className="designers-makers-container">
      <div className="image-section">
        <img src="writeguy.jpg" alt="Craftsperson" className="craft-image" />
        <p className="caption">Zangmo</p>
      </div>
      <div className="text-section">
        <p className="subheading">DESIGNERS AND MAKERS</p>
        <h2 className="heell">
          Discover the artistry and craftsmanship behind HomeVibe with our
          skilled designers and makers
        </h2>
        <div className="ala"><button className="cta-button">Know more</button></div>
      </div>
    </div>
  );
};

export default Makers;
