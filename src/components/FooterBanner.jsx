import React from "react";
import AppStoreIcon from "../assets/icons/app-store.svg";
import PlayStoreIcon from "../assets/icons/google-play.svg";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import "../styles/FooterBanner.css";

const FooterBanner = () => {
  return (
    <div className="footer-banner">
      <div className="container">
        <h2 className="footer-banner-title">Sign up and Scoot off today</h2>
        <div className="footer-banner-container">
          <div className="footer-banner-button">
            <AppStoreButton />
          </div>
          <div>
            <PlayStoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
