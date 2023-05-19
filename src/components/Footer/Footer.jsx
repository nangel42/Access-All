import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import * as userService from "../../utilities/users-service";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-header">
          <h2>Create your own Meetup group.</h2>
          <button>Get Started</button>
        </div>
        <hr />
        <div className="list-container">
          <ul>
            <li className="nav-item">
              <Link to="/">Your Account</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link to="/login">Log In</Link>
            </li>
            <li className="nav-item">
              <Link to="/help">Help</Link>
            </li>
            <li className="nav-item">
              <Link to="/donate">Become an Affiliate</Link>
            </li>
          </ul>
          <ul>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a href="#demo">Demo</a>
            </li>
          </ul>
          <ul>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a href="#demo">Demo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
