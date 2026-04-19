import React, { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header-container">
      <div className="logo">
        <img src="/chapel logo.png" alt="Chapel Of Praise Logo" />
        <h3>Chapel Of Praise</h3>
      </div>

      {/* Hamburger — visible only on mobile via CSS */}
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
        <li>Home</li>
        <li>About</li>
        <li>Units</li>
        <li>Sermons</li>
        <li>Contact Us</li>
      </ul>

      {/* Join Us — hidden on mobile, visible on desktop via CSS */}
      <button className="herobtn">Join Us</button>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="Hero-section">
      <div className="overlay"></div>
      <div className="Hero-container">
        <h1>Welcome home to Chapel Of Praise</h1>
        <p>No matter where you are on your journey, you are always welcome here.</p>
        <p>Whether you're looking for answers or a place to belong, we invite you to join us.</p>
      </div>
    </div>
  );
};

const Herosection = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Herosection;