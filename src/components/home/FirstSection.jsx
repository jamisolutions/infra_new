import React from "react";
import { Search } from "lucide-react";
import "./styles/FirstSection.css";

const propertyTypes = [
  { icon: "/icons/UI_UX_GitArtha_Infra-09.png", label: "APARTMENTS" },
  { icon: "/icons/UI_UX_GitArtha_Infra-10.png", label: "VILLA" },
  { icon: "/icons/UI_UX_GitArtha_Infra-11.png", label: "PLOT" },
  { icon: "/icons/UI_UX_GitArtha_Infra-12.png", label: "FARMHOUSES" },
  { icon: "/icons/UI_UX_GitArtha_Infra-13.png", label: "PRELEASED" },
  { icon: "/icons/UI_UX_GitArtha_Infra-14.png", label: "COMMERCIAL" },
  { icon: "/icons/UI_UX_GitArtha_Infra-15.png", label: "SHOPS" },
  { icon: "/icons/UI_UX_GitArtha_Infra-16.png", label: "WAREHOUSES" },
];

const FirstSection = () => {
  return (
    <section className="pss-section">
      <div className="pss-container">

        {/* TITLE */}
        <h2 className="pss-title">REAL ESTATE MADE REAL EASY</h2>
        <p className="pss-subtitle">#searchyourdreamhomeorofice WITH US</p>

        {/* SEARCH BAR — static */}
        <div className="pss-search-wrap">
          <div className="pss-search-bar">
            <input
              className="pss-input"
              type="text"
              placeholder="Search property type…"
              readOnly
            />
            <button className="pss-search-btn">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* PROPERTY TYPE GRID — static */}
        <div className="pss-grid">
          {propertyTypes.map((type) => (
            <div key={type.label} className="pss-card">
              <div className="pss-icon-box">
                <img src={type.icon} alt={type.label} />
              </div>
              <p className="pss-label">{type.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;