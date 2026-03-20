import React, { useState } from "react";
import "./styles/EmailSection.css";

const EmailSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="es-section">
      {/* Rupee / Brand Logo */}
      <div className="es-logo-wrap">
        <img
          src="/icons/rupee-logo.png"  /* ← replace with your rupee image path */
          alt="Gitartha Logo"
          className="es-logo"
        />
      </div>

      {/* Email Input — overlaps the cityscape */}
      <div className="es-input-wrap">
        <div className="es-input-bar">
          <input
            className="es-input"
            type="email"
            placeholder="Type your email address here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="es-submit-btn" onClick={handleSubmit}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;