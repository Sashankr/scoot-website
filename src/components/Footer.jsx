import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import LightLogo from "./LightLogo";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-logo">
          <LightLogo />
        </div>
        <ul>
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
    </footer>
  );
};

export default Footer;
