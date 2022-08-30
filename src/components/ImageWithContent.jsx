import React from "react";
import "../styles/ImageWithContent.css";

const ImageWithContent = ({
  arrowIconDirection,
  thumbnail,
  title,
  description,
  isButtonRequired,
  buttonText,
}) => {
  return (
    <div className="image-with-content">
      <div className="image-with-content-thumbnail-container">
        <img
          className="image-with-content-thumbnail"
          src={thumbnail}
          alt={title}
        />
      </div>
      <h2 className="image-with-content-title">{title}</h2>
      <p className="image-with-content-description">{description}</p>
      {arrowIconDirection === "left" ? (
        <img
          src="../assets/patterns/left-downward-arrow.svg"
          alt="left-arrow-overlay"
        />
      ) : (
        <img
          src="../assets/patterns/right-arrow.svg"
          alt="right-arrow-overlay"
        />
      )}
      {isButtonRequired && (
        <button className="image-with-content-button">{buttonText}</button>
      )}
    </div>
  );
};

export default ImageWithContent;
