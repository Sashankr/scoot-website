import React from "react";
import LeftArrow from "../assets/patterns/left-downward-arrow.svg";
import RightArrow from "../assets/patterns/right-arrow.svg";
import "../styles/ImageWithContent.css";

const ImageWithContent = ({
  arrowIconDirection,
  thumbnail,
  title,
  description,
  isButtonRequired,
  buttonText,
  alignTopwards,
}) => {
  return (
    <div className="image-with-content">
      <div className="image-with-content-thumbnail-container">
        <img
          className="image-with-content-thumbnail"
          src={thumbnail}
          alt={title}
        />
        {arrowIconDirection === "left" ? (
          <img
            className={`left-arrow-overlay ${alignTopwards ? "top" : ""}`}
            src={LeftArrow}
            alt="left-arrow-overlay"
          />
        ) : (
          <img
            className="right-arrow-overlay"
            src={RightArrow}
            alt="right-arrow-overlay"
          />
        )}
      </div>
      <h2 className="image-with-content-title">{title}</h2>
      <p className="image-with-content-description">{description}</p>

      {isButtonRequired && (
        <button className="image-with-content-button">{buttonText}</button>
      )}
    </div>
  );
};

export default ImageWithContent;
