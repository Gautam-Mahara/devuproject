import React from "react";
import "./css/section1.css";
import "./css/navbar.css";
import "./css/midsection1.css";
import "./css/section2.css";
import Collection from "./components/Collection.jsx";
import Makers from "./components/Makers.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Categories from "./components/Categories.jsx";

function App() {
  return (
    <div>
      {/* Section 1: Navigation Bar */}
      <div className="section-1">
        <div className="nav-bar">
          <div className="nav-1">
            <img src="menu.png" alt="Menu" />
            <h2>HomeVibes</h2>
          </div>
          <div>
            <ul>
              <li>
                <img src="search.png" alt="Search" />
              </li>
              <li>
                <img src="fav2.png" alt="Favorites" />
              </li>
              <li>
                <img src="shopping.png" alt="Shopping Cart" />
              </li>
              <li>
                <img src="user.png" alt="User" />
              </li>
              <li>
                <h2>Login/Signup</h2>
              </li>
            </ul>
          </div>
        </div>

        {/* Mid-Section */}
        <div className="mid-section-1">
          Crafted with Passion, Designed for Comfort
        </div>
        <div className="mid-section-2">
          <h3>View our Latest Collection</h3>
          <h3>Browse Categories</h3>
        </div>
      </div>

      {/* Section 2: Product Highlights */}
      <div className="section-2">
        <div className="section-2-1">
          <h1>New Arrivals</h1>
        </div>
        <div className="section-2-2">
          <h1>Best Sellers</h1>
          <img className="plant-img" src="plant.png" alt="Plant" />
          <img className="lamp-img" src="lamp.png" alt="Lamp" />
          <img className="flower-img" src="flower.png" alt="Flower" />
          <img className="hole-img" src="yy.png" alt="Unique Item" />
          <img className="led-img" src="led lamp.png" alt="LED Lamp" />
        </div>
      </div>

      {/* Collection Component */}
      <Categories/>
      <Collection/>
      <Makers />
      <Testimonials/>
    </div>
  );
}

export default App;
