import React from "react";
import "./styles/ThirdSection.css";

import legalImg from "/images/icon_00.png";
import interiorsImg from "/images/icon_01.png";
import constructionImg from "/images/icon_02.png";
import mortgageImg from "/images/icon_03.png";

const services = [
  {
    id: 1,
    label: "LEGAL DOCUMENTS",
    image: legalImg,
    bgColor: "#004466",
  },
  {
    id: 2,
    label: "INTERIORS",
    image: interiorsImg,
    bgColor: "#004466",
  },
  {
    id: 3,
    label: "CONSTRUCTION",
    image: constructionImg,
    bgColor: "#004466",
  },
  {
    id: 4,
    label: "MORTGAGE LOANS",
    image: mortgageImg,
    bgColor: "#004466",
  },
];

const ThirdSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">ONE STOP FOR ALL YOUR NEEDS!</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            style={{ backgroundColor: service.bgColor }}
          >
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.label}
                className="service-image"
              />
            </div>
            <p className="service-label">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;