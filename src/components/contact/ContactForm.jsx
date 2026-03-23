import "./styles/ContactForm.css";
// import "./contact-new.css";
const ContactForm = () => {
  return (
    <section className="contact-clean">

      <h1 className="contact-title">CONTACT</h1>

      <div className="contact-wrapper">

        {/* LEFT IMAGE */}
        <div className="contact-left">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            alt="contact"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h2>We’d Love to Hear From You</h2>
          <p>
            Have a question, idea, or feedback? Fill out the form and our team
            will get back to you shortly.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Name *" />
            <input type="email" placeholder="Email *" />
            <textarea placeholder="Message *"></textarea>

            <button>SUBMIT</button>
          </form>
        </div>

      </div>

    </section>
  );
};

export default ContactForm;