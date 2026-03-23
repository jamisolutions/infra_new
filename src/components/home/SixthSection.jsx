import React from "react";
import "./styles/SixthSection.css";

const leftItems = ["Residential", "Hospitality", "Product Design", "Workspaces"];
const rightItems = ["Public", "Urbanism", "Retail"];

const SixthSection = () => {
  return (
    <section className="ms-section">
      <div className="ms-container">

        <div className="ms-column">
          {leftItems.map((item) => (
            <span key={item} className="ms-item">{item}</span>
          ))}
        </div>

        <div className="ms-column">
          {rightItems.map((item) => (
            <span key={item} className="ms-item">{item}</span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SixthSection;