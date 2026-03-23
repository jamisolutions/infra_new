import React, { useState } from "react";
import "./styles/ContactFaq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "How does website version control work?", answer: "Website version control tracks changes to your site's code and content over time." },
    { question: "Can I use this without an extension?", answer: "Yes, it can be used without any browser extension." },
    { question: "Why is this better than usepastel?", answer: "It offers more features and better integration options compared to alternatives." },
    { question: "How can I integrate this with GitHub?", answer: "Use APIs or webhooks to connect with your GitHub repositories." },
    { question: "How can I integrate this with Jira?", answer: "Integration is possible using API or automation tools." },
    { question: "How do you handle responsive commenting?", answer: "Comments automatically adjust based on screen size and device." }
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-heading">FAQ</h2>

      <div className="accordion">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className={`accordion-button ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="question-text">{faq.question}</span>
              <span className={`chevron ${activeIndex === index ? "rotate" : ""}`}>▼</span>
            </button>

            <div className={`accordion-panel ${activeIndex === index ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;