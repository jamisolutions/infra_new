import React from "react";
import "./styles/FifthSection.css";

// Replace with your actual image paths
import heroImg from "/images/interior_3.jpg";
import collageImg from "/images/interior_4.jpg";

const FifthSection = () => {
  return (
    <section className="int2-section">
      <div className="int2-layout">

        {/* ── Left: large hero image ── */}
        <div className="int2-left">
          <div className="int2-hero-wrapper">
            <img src={heroImg} alt="Luxury green interior" className="int2-hero-img" />
          </div>
        </div>

        {/* ── Right: collage image + address ── */}
        <div className="int2-right">
          <div className="int2-collage-wrapper">
            <img src={collageImg} alt="Interior collage" className="int2-collage-img" />
          </div>

          <address className="int2-address">
            Flat no 204, L.D Heights,
            Mahalakshmi nagar, Near BI pass
            Y junction, Ramachandrapuram,
            Dr B.R. Ambedkar dist,
            Andhra Pradesh,
            India-533 255
          </address>
        </div>

      </div>
    </section>
  );
};

export default FifthSection;