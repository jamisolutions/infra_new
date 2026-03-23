import React from "react";
import "./styles/ExploreSection.css";

const ExploreSection = () => {
  return (
    <section className="as-section">
      <div className="as-container">

        <h1 className="as-title">
          INNOVATIVE DESIGNS FOR AN EVOLVING WORLD
        </h1>

        <p className="as-subtitle">
          Experience the Best of Infrastructure & Home...
        </p>

        <a href="/about" className="as-link">
          About us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="13 6 19 12 13 18" />
          </svg>
        </a>

      </div>
    </section>
  );
};

export default ExploreSection;