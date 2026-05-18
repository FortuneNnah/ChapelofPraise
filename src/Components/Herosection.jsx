import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
      <button className="herobtn">Follow Us</button>
    </div>
  );
};

export const Hero = () => {
  return (
    <div id="Home" className="Hero-section">
      <div className="overlay"></div>
      <div className="Hero-container">
        <h1>Welcome to Chapel Of Praise</h1>
        <p>We are a community of believers committed to sharing the truth of God’s Word and raising lives that reflect His purpose.</p>
      </div>
    </div>
  );
};

const Herosection = () => {
  return <Hero />;
};

export default Herosection;