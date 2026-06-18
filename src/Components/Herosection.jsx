import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Gallery from "./Gallery";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if(isMenuOpen) {
      setIsMenuOpen(false)
    }
  }
  
  return (
    <div className="Header-container">
      <div className="logo">
        <img src="/imgs/chapel logo.png" alt="Chapel Of Praise Logo" />
        <h3>Chapel Of Praise</h3>
      </div>

      <button
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
      </button>

      {/* Nav links */}
      <ul className={`navlinks ${isMenuOpen ? "mobile-menu-open" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </li>
        <li>
          <NavLink to="/units" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Units</NavLink>
        </li>
        <li>
          <NavLink to="/sermons" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Sermons</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
        </li>
      </ul>

      {/* Join Us — hidden on mobile, visible on desktop via CSS */}
      <button className="herobtn">Connect With Us</button>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="Home" className="Hero-section" aria-label="Welcome to Chapel Of Praise">
      <div className="overlay"></div>
      <div className="Hero-container">
        <h1>Welcome to Chapel Of Praise</h1>
        <p>A thriving community of faith dedicated to worship, spiritual growth, and servant-hearted service. Whether you're searching for meaning, seeking a faith community, or looking to deepen your walk with Christ, Chapel Of Praise welcomes you with open hearts.</p>
        <div className="hero-cta" role="group" aria-label="Call to action buttons">
          <button className="cta-btn cta-btn--primary" aria-label="Join us for Sunday worship at 8:00 AM or 10:30 AM">Join Us This Sunday</button>
          <button className="cta-btn cta-btn--secondary" aria-label="Learn more about Chapel Of Praise">Learn More</button>
        </div>
        <div className="hero-info" role="region" aria-label="Service times">
          <div className="hero-info-item">
            <span className="info-label">Sunday Worship</span>
            <span className="info-value">8:00 AM & 10:30 AM</span>
          </div>
          <div className="hero-info-item">
            <span className="info-label">Location</span>
            <span className="info-value">Pav 2, Akwa Ibom State University</span>
          </div>
        </div>
      </div>
    </section>
  );
};


const Herosection = () => {
  return(
    <>
    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
    <Gallery />
    </>
  );
};

export default Herosection;