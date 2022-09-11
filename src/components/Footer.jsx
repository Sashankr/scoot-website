import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import LightLogo from "./LightLogo";
import FacebookLogo from "../assets/icons/facebook.svg";
import TwitterLogo from "../assets/icons/twitter.svg";
import InstagramLogo from "../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-logo">
          <LightLogo />
        </div>
        <ul className="footer-logo-list-container">
          <li className="footer-logo-list">
            <Link to="/">About</Link>
          </li>
          <li className="footer-logo-list">
            <Link to="/">Location</Link>
          </li>
          <li className="footer-logo-list">
            <Link to="/">Careers</Link>
          </li>
        </ul>
      </div>
      <div className="footer-socials">
        <img src={FacebookLogo} alt="facebook" />
        <img src={TwitterLogo} alt="twitter" />
        <img src={InstagramLogo} alt="instagram" />
      </div>
    </footer>
  );
};

export default Footer;
