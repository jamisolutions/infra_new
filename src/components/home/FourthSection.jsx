import React from "react";
import "./styles/FourthSection.css";

// Replace these with your actual image imports
import heroImg from "/images/interior_0.webp";
import topRightImg from "/images/interior_1.jpg";
import bottomRightImg from "/images/interior_2.jpg";

const FourthSection = () => {
  return (
    <section className="interiors-section">
      {/* ── Title ── */}
      <h2 className="interiors-title">EXPLORE BEST INTERIORS OF ALL TIME</h2>

      {/* ── Layout ── */}
      <div className="interiors-layout">
        {/* Left: large hero image + address */}
        <div className="interiors-left">
          <div className="interiors-hero-wrapper">
            <img src={heroImg} alt="Luxury living room" className="interiors-hero-img" />
          </div>
          <address className="interiors-address">
            Flat no 204, L.D Heights,
            Mahalakshmi nagar, Near BI pass
            Y junction, Ramachandrapuram,
            Dr B.R Ambedkar dist,
            Andhra Pradesh,
            India-533 255
          </address>
        </div>

        {/* Right: two stacked images */}
        <div className="interiors-right">
          <div className="interiors-img-wrapper">
            <img src={topRightImg} alt="Modern dining area" className="interiors-side-img" />
          </div>
          <div className="interiors-img-wrapper">
            <img src={bottomRightImg} alt="Contemporary living room" className="interiors-side-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;