import React from "react";
import "./styles/PortfolioPage.css";

import PortfolioHero from "../components/portfolio/PortfolioHero.jsx";
// import CaseSection from "../components/portfolio/CaseSection";
import ProjectsGrid from "../components/portfolio/ProjectsGrid.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Header />
      {/* HERO SECTION */}
      <PortfolioHero />
      <ProjectsGrid />
      <Footer />

    </div>
  );
};

export default PortfolioPage;