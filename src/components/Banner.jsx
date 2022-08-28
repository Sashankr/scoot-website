import React from "react";
import { homeBannerContent } from "../helpers/mock";
import RightArrowPattern from "../assets/patterns/right-arrow.svg";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <h2
        className="banner-title"
        dangerouslySetInnerHTML={{ __html: homeBannerContent.title }}
      />
      <p
        className="banner-description"
        dangerouslySetInnerHTML={{ __html: homeBannerContent.description }}
      />
      <button className="banner-action">{homeBannerContent.buttonTitle}</button>
      <img
        className="banner-right-arrow"
        src={RightArrowPattern}
        alt="right arrow,used for filler"
      />
    </div>
  );
};

export default Banner;
