import react from "react";

// import logo from './logo.svg';

// import './App.css';
// import { Component } from 'react';
// import NavBar from './components/NavBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './css/section1.css'
import './css/navbar.css'
import './css/midsection1.css'
import './css/section2.css'


function App() {
  return (
    <div className="">
       {/* <NavBar /> */}
       <div className="section-1">  
        <div className="nav-bar">
          <div className="nav-1">
    <img src="menu.png" alt="" />
            <h2>
              HomeVibes
              </h2>
          </div>
          <div>
            <ul>
              <img src="search.png" alt="" />
              <img src="fav2.png" alt="" />
              <img src="shopping.png" alt="" />
              <img src="user.png" alt="" />
              <h2>Login/Signup</h2>
            </ul>
          </div>
        </div>
        <div>

        <div className="mid-section-1">
          Crafted with Passion, Designed for Comfort
        </div>
        {/* mid-section-2 is written in midsection1.css */}
        <div className="mid-section-2">
          <h3> View our Latest Collection</h3>
          <h3> Browse Catergories </h3>
        </div>
        </div>

       </div>
       <div className="section-2">
        <div className="section-2-1">
          <h1>New Arrivals</h1>
        </div>
        <div className="section-2-2">
          <h1>Best Sellers</h1>
          <img className="plant-img" src="plant.png" alt="" />
          <img className="lamp-img" src="lamp.png" alt="" />
          <img className="flower-img" src="flower.png" alt="" />
          <img className="hole-img" src="yy.png" alt="" />
          <img className="led-img" src="led lamp.png" alt="" />
        </div>
       </div>
    </div>
  );
}

export default App;
