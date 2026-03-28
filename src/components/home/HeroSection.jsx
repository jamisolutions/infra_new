import { useState, useEffect } from "react";
import "./styles/HeroSection.css";

const projects = [
  {
    id: 1,
    name: "RAJAHMUNDRY AVENUE",
    image: "/images/35.webp",
  },
  {
    id: 2,
    name: "KRISHNA ENCLAVE",
    image: "/images/36.webp",
  },
  {
    id: 3,
    name: "HYDERABAD IT PARK",
    image: "/images/37.webp",
  },
  {
    id: 4,
    name: "ANOTHER PROJECT",
    image: "/images/36.webp",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      goTo((c) => (c + 1) % projects.length);
    }, 7000);
    return () => clearTimeout(timer);
  }, [current]);

  const goTo = (getNext) => {
    setCurrent((c) => {
      const next = typeof getNext === "function" ? getNext(c) : getNext;
      if (next === c) return c;
      setAnimating(true);
      setPrev(c);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 800);
      return next;
    });
  };

  const handleDotClick = (i) => {
    if (animating) return;
    goTo(() => i);
  };

  return (
    <section className="slider-section">
      <div className="slider-wrapper">
        {projects.map((project, i) => {
          let slideClass = "slide";
          if (i === current) {
            slideClass += animating ? " slide--enter" : " slide--active";
          } else if (i === prev) {
            slideClass += " slide--exit";
          } else {
            slideClass += " slide--hidden";
          }
          return (
            <div
              key={project.id}
              className={slideClass}
              style={{ background: project.bgColor }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="slide__img"
                draggable={false}
              />
              <div className="slide__overlay" />
              <div className="slide__caption">
                <h2 className="slide__title">{project.name}</h2>
              </div>
            </div>
          );
        })}

        {/* Dot indicators */}
        <div className="slider-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === current ? " slider-dot--active" : ""}`}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}