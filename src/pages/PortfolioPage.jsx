import React from "react";
import "./styles/PortfolioPage.css";

import PortfolioHero from "../components/portfolio/PortfolioHero.jsx";
// import CaseSection from "../components/portfolio/CaseSection";
import ProjectsGrid from "../components/portfolio/ProjectsGrid.jsx";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">

      {/* HERO SECTION */}
      <PortfolioHero />
      {/* <CaseSection /> */}

      {/* PROJECT GRID */}
      <ProjectsGrid />

    </div>
  );
};

export default PortfolioPage;