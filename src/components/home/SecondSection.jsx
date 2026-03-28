import { useNavigate } from 'react-router-dom';
import "./styles/SecondSection.css";

const SecondSection = () => {
  const navigate = useNavigate();

  return (
    <section className="properties-section">
      <div className="properties-container">

        <h2 className="properties-heading">
          BEST REAL ESTATE OF ANDHRA
        </h2>

        <div className="properties-grid">

          {[
            { title: "RAJAHMUNDRY ENCLAVE", price: "Price on Call", img: "/images/35.webp" },
            { title: "KRISHNA ENCLAVE",     price: "Price on Call", img: "/images/36.webp" },
            { title: "HYDERABAD IT PARK",   price: "Price on Call", img: "/images/37.webp" },
            { title: "RAJAHMUNDRY ENCLAVE", price: "Price on Call", img: "/images/35.webp" },
            { title: "KRISHNA ENCLAVE",     price: "Price on Call", img: "/images/36.webp" },
            { title: "HYDERABAD IT PARK",   price: "Price on Call", img: "/images/37.webp" },
          ].map((item, index) => (

            <div className="property-card" key={index}>

              <div className="property-image">
                <img src={item.img} alt={item.title} />
                <div className="property-badges">
                  <span className="badge-featured">Featured</span>
                  <span className="badge-sale">For Sale</span>
                </div>
              </div>

              <div className="property-info">
                <div className="property-text">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
                <button
                  className="info-arrow"
                  onClick={() => navigate("/portfolio")}
                >
                  →
                </button>
              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default SecondSection;