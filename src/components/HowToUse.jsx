import React from "react";
import { homeHowToSection } from "../helpers/mock";
import ProgressLineIcon from "../assets/patterns/line.svg";
import "../styles/HowToUse.css";

const HowToUse = () => {
  return (
    <div className="how-to-use">
      {homeHowToSection.map((data, index) => {
        return (
          <div key={index} className="how-to-use-section">
            <img src={ProgressLineIcon} className="line" alt="progress line" />
            <img src={data.icon} className="icon" alt={data.title} />
            <div className="content">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HowToUse;
