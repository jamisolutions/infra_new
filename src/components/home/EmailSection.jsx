import React from "react";
import "./styles/EmailSection.css";

import bgImage from "/icons/UI_UX_GitArtha_Infra-19.jpg";
import rupeeLogo from "/images/UI_UX_GitArtha.png";

const EmailSection = () => {
  return (
    <div
      className="es-hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="es-overlay">

        {/* Logo */}
        <img src={rupeeLogo} alt="logo" className="es-logo" />

        {/* Email Input */}
        <div className="es-input-container">
          <input
            type="email"
            placeholder="Type your email address here"
          />
          <button className="es-arrow-btn">
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
          </button>
        </div>

      </div>
    </div>
  );
};

export default EmailSection;