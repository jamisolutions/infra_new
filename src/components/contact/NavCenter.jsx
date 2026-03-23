import { Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";
import "./styles/NavCenter.css";

const NavCenter = () => {
  return (
    <section className="nav-center">

      {/* NAV LINKS */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      {/* SOCIAL ICONS */}
      <div className="nav-icons">
        <a href="#"><Mail /></a>
        <a href="#"><Instagram /></a>
        <a href="#"><Linkedin /></a>
        <a href="#"><MessageCircle /></a>
      </div>

    </section>
  );
};

export default NavCenter;