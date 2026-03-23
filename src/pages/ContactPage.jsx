import React from "react";
import ContactForm from "../components/contact/ContactForm";
import "./styles/ContactPage.css";
// import "../components/contact/ContactMap.jsx"
import ContactMap from "../components/contact/ContactMap.jsx";
import ContactFaq from "../components/contact/ContactFaq.jsx";
// import NavCenter from "../components/contact/NavCenter.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
function ContactPage() {
  return (
    <div className="contact-page">
      <Header />
      <ContactForm />
      <ContactMap />
      <ContactFaq />
      {/* <NavCenter /> */}
      <Footer />
    </div>
  );
}

export default ContactPage;
