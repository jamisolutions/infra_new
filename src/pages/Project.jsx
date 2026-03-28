import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/Project.css";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

const Project = () => {
  const { slug } = useParams();

  const projects = [
    { name: 'Haven Co.', image: '/images/Haven_Co.webp', slug: 'haven-co' },
    { name: 'Lume Hotel', image: '/images/Lume_Hotel.webp', slug: 'lume-hotel' },
    { name: 'Lashhood', image: '/images/Lashhood.webp', slug: 'lashhood' },
    { name: 'Nova Market', image: '/images/Nova_Market.webp', slug: 'nova-market' },
    { name: 'Echo Residence', image: '/images/Echo_Residence.webp', slug: 'echo-residence' },
    { name: 'Zenith Tower', image: '/images/Zenith_Tower.webp', slug: 'zenith-tower' },
    { name: 'Aurora Villa', image: '/images/Aurora_Villa.webp', slug: 'aurora-villa' },
    { name: 'Pinnacle Loft', image: '/images/Pinnacle_Loft.webp', slug: 'pinnacle-loft' },
  ];

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <div style={{ padding: "40px" }}>Project not found</div>;

  const stats = [
    "Service: Urban Planning",
    "Area: 40 Acres",
    "Team Size: 15",
    "Duration: 18 Months",
    "Clients: City Planners",
    "Budget: $600,000",
  ];

  /* 🔥 CURSOR ZOOM LOGIC */
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const img = e.currentTarget.querySelector("img");
    img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
  };

  const resetZoom = (e) => {
    const img = e.currentTarget.querySelector("img");
    img.style.transformOrigin = "center";
  };

  return (
    <>
      <Header />
      <div className="project">

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <h1>{project.name}</h1>
            <p>
              We worked hand-in-hand with city planners and residents to shape a vibrant, walkable neighborhood.
            </p>
            <button className="btn">Buy Template →</button>
          </div>

          <div className="hero-right">
            <img src={project.image} alt={project.name} />
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="stats-track">
            {[...stats, ...stats].map((item, i) => (
              <div key={i} className="stat">{item}</div>
            ))}
          </div>
        </section>

        {/* DARK */}
        <section className="dark-section">
          <div className="dark-left">
            <h2>Present your projects with clarity and impact</h2>
          </div>

          <div className="dark-right">
            <p>Your work speaks volumes — Archscale gives it the platform it deserves.</p>
            <button className="btn-light">Customize →</button>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery">
          <div className="gallery-left">
            <img src={project.image} alt="" />
          </div>

          <div className="gallery-right">
            <img src={project.image} alt="" />
          </div>
        </section>

        {/* FULL IMAGE */}
        <section className="full-img">
          <img src={project.image} alt="" />
        </section>

        {/* FINAL (🔥 INTERACTIVE ZOOM) */}
        <section className="final">
          <div
            className="final-left"
            onMouseMove={handleMove}
            onMouseLeave={resetZoom}
          >
            <img src={project.image} alt="" />
          </div>

          <div className="final-right">
            <h2>Additional Insights</h2>
            <p>Explore further details and unique aspects of this project.</p>
            <button className="btn-light">Explore More →</button>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Project;