import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ProjectsGrid.css";

const ProjectsGrid = () => {
  const navigate = useNavigate();

  const projects = [
    { name: "Haven Co.", image: "/images/Haven_Co.jpg", slug: "haven-co" },
    { name: "Lume Hotel", image: "/images/Lume_Hotel.jpg", slug: "lume-hotel" },
    { name: "Lashhood", image: "/images/Lashhood.jpg", slug: "lashhood" },
    { name: "Nova Market", image: "/images/Nova_Market.jpg", slug: "nova-market" },
    { name: "Echo Residence", image: "/images/Echo_Residence.jpg", slug: "echo-residence" },
    { name: "Zenith Tower", image: "/images/Zenith_Tower.jpg", slug: "zenith-tower" },
    { name: "Aurora Villa", image: "/images/Aurora_Villa.jpg", slug: "aurora-villa" },
    { name: "Pinnacle Loft", image: "/images/Pinnacle_Loft.jpg", slug: "pinnacle-loft" },
  ];

  // 🔥 Scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  // 🔥 Ripple + Navigate
  const handleClick = (e, slug) => {
    // ripple
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = e.currentTarget.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;

    e.currentTarget.appendChild(circle);

    setTimeout(() => {
      circle.remove();
      navigate(`/project/${slug}`); // 🚀 navigate after ripple
    }, 300); // small delay = smooth UX
  };

  return (
    <section className="projects">
      <div className="grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={(e) => handleClick(e, project.slug)}
          >
            <div className="image-wrapper">
              <img src={project.image} alt={project.name} />
            </div>

            <div className="card-footer">
              <span className="title">{project.name}</span>
              <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;