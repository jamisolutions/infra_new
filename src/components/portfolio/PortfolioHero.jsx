import React from "react";
import "./styles/PortfolioHero.css";

const PortfolioHero = () => {
  const projects = [
    { name: "Haven Co.", image: "/images/Haven_Co.jpg" },
    { name: "Nova Market", image: "/images/Nova_Market.jpg" },
    { name: "Echo Residence", image: "/images/Echo_Residence.jpg" },
    { name: "Zenith Tower", image: "/images/Zenith_Tower.jpg" },
    { name: "Aurora Villa", image: "/images/Aurora_Villa.jpg" },
    { name: "Pinnacle Loft", image: "/images/Pinnacle_Loft.jpg" },
  ];

  return (
    <div className="portfolio">

      <h1 className="hero-title">
        TELL YOUR STUDIO STORY WITH ARCHSCALE
      </h1>

      <div className="carousel">
        <div className="carousel-track">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <span className="carousel-name">{project.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FIXED TEXT SECTION */}
      <div className="case-section">
        <div className="case-container">

          <div className="case-left">
            <h1>
              PRESENT YOUR PROJECTS <br />
              WITH CLARITY AND IMPACT
            </h1>
          </div>

          <div className="case-right">
            <p>
              Your work speaks volumes — Archscale gives it the platform it
              deserves. With a clean, image-focused layout and dynamic CMS
              integration, you can showcase each project seamlessly.
            </p>

            <button className="case-btn">
              Buy Template →
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PortfolioHero;