import React from "react";
import { homeHowToSection } from "../helpers/mock";
import "../styles/HowToUse.css";

const HowToUse = () => {
  return (
    <div className="how-to-use">
      {homeHowToSection.map((data, index) => {
        return (
          <div key={index} className="how-to-use-section">
            <img src={data.icon} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HowToUse;
