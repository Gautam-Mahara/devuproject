import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <div className="logo-hexagon">
          <img src="./logoHome.png" alt="HomeVibes Logo" />
        </div>
        <h2 className="logo-title">
          Home<span className="highlight">Vibes</span>
        </h2>
      </div>
      <div className="footer-columns">
        <div className="footer-column-main">
          <div className="newsletter">
            <h2>Keep up to date with new collection and festive sales</h2>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
            <p>
              We respect your privacy, we’ll not spam you! Read our{" "}
              <a href="#">privacy policy</a> here.
            </p>
          </div>
        </div>
        <div className="footer-column-links">
          <div className="footer-links">
            <div className="column">
              <h3>COMPANY</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Find a showroom</a></li>
              </ul>
            </div>
            <div className="column">
              <h3>PRODUCT</h3>
              <ul>
                <li><a href="#">Categories</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best sellers</a></li>
                <li><a href="#">Collections</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#">Terms & Conditions</a>    <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;