import "./styles/ContactMap.css";

const ContactMap = () => {
  return (
    <div className="contact-map-wrapper">

      <section className="contact-map-section">
        <div className="map-container">

          {/* MAP */}
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps?q=17.3850,78.4867&z=15&output=embed"
              title="map"
            ></iframe>
          </div>

          {/* FLOATING CARD */}
          <div className="contact-card">
            <h2>Get in touch</h2>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <p className="label">Address</p>
                <p>7674 Garthner Avenue</p>
                <p>Corona, Manchester 11358</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <div>
                <p className="label">Contact</p>
                <p>(123) 456 - 7890</p>
              </div>
            </div>

            <div className="contact-item">
              <span>✉️</span>
              <div>
                <p>contact@example.com</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactMap;