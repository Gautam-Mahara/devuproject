import React, { useState } from 'react';
import "../css/navbar.css";
import "./ContactUs.css";

const ContactForm = () => {

  return (
      <div className="parent">
        <div className="nav-bar">
          <div className="nav-1">
          <img src="email.png" style={{ width: '40px', height: '40px' }} alt="Menu" />
            <p style={{color:"#f9ba27"}}>Devesh.283@gmail.com</p>
          </div>
          <div>
            <ul>
              <li>
                <img src="fac1.png" alt="Search" />
              </li>
              <li>
                <img src="twi1.png" alt="Favorites" />
              </li>
              <li>
                <img src="ins1.png" alt="Shopping Cart" />
              </li>
            </ul>
          </div>
        </div>
       
          <form action="" className='form-d'>
            Contact Us
            <br></br>
            <input className='input-text' type="text" value='Full Name' />
            <br></br>
            <input className='input-text' type="text" value='E-Mail'/>
            <br></br>
            <input className='input-text' type="text" value='Message' />
            <br></br>
            <input className='input-but' type="button" value="Contact Us" />

          </form>
        </div>
  );
};

export default ContactForm;