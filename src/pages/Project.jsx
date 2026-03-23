import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/Project.css";

const Project = () => {
  const { slug } = useParams();

  const projects = [
    // { name: "Haven Co.", image: "/images/Haven_Co.jpg", slug: "haven-co" },
    // { name: "Echo Residence", image: "/images/Echo_Residence.jpg", slug: "echo-residence" },
    // { name: "Nova Market", image: "/images/Nova_Market.jpg", slug: "nova-market" },
    { name: 'Haven Co.', image: '/images/Haven_Co.jpg', slug: 'haven-co' },
    { name: 'Lume Hotel', image: '/images/Lume_Hotel.jpg', slug: 'lume-hotel' },
    { name: 'Lashhood', image: '/images/Lashhood.jpg', slug: 'lashhood' },
    { name: 'Nova Market', image: '/images/Nova_Market.jpg', slug: 'nova-market' },
    { name: 'Echo Residence', image: '/images/Echo_Residence.jpg', slug: 'echo-residence' },
    { name: 'Zenith Tower', image: '/images/Zenith_Tower.jpg', slug: 'zenith-tower' },
    { name: 'Aurora Villa', image: '/images/Aurora_Villa.jpg', slug: 'aurora-villa' },
    { name: 'Pinnacle Loft', image: '/images/Pinnacle_Loft.jpg', slug: 'pinnacle-loft' },
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

  return (
    <div className="project">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-left">
          <h1>{project.name}</h1>
          <p>
            We worked hand-in-hand with city planners and residents to shape a
            vibrant, walkable neighborhood.
          </p>
          <button className="btn">Buy Template →</button>
        </div>

        <div className="hero-right">
          <img src={project.image} alt={project.name} />
        </div>
      </section>

      {/* ===== MOVING STATS ===== */}
      <section className="stats">
        <div className="stats-track">
          {[...stats, ...stats].map((item, i) => (
            <div key={i} className="stat">{item}</div>
          ))}
        </div>
      </section>

      {/* ===== DARK TEXT ===== */}
      <section className="dark-section">
        <div className="dark-left">
          <h2>
            Present your projects <br /> with clarity and impact
          </h2>
        </div>

        <div className="dark-right">
          <p>
            Your work speaks volumes — Archscale gives it the platform it deserves.
          </p>
          <button className="btn-light">Customize →</button>
        </div>
      </section>

      {/* ===== ZOOM GALLERY ===== */}
      <section className="gallery">
        <div className="gallery-left">
          <img src={project.image} alt="" />
        </div>

        <div className="gallery-right">
          <img src={project.image} alt="" />
        </div>
      </section>

      {/* ===== FULL IMAGE ===== */}
      <section className="full-img">
        <img src={project.image} alt="" />
      </section>

      {/* ===== FINAL ===== */}
      <section className="final">
        <div className="final-left">
          <img src={project.image} alt="" />
        </div>

        <div className="final-right">
          <h2>Additional Insights</h2>
          <p>Explore further details and unique aspects of this project.</p>
          <button className="btn-light">Explore More →</button>
        </div>
      </section>

    </div>
  );
};

export default Project;