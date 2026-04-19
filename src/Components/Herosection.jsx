import React, { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header-container">
      <div className="logo">
        <img src="src/assets/chapel logo.png" alt="Chapel Of Praise Logo" />
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
        <h1>Welcome to Chapel Of Praise</h1>
        <p>We are a community of believers committed to sharing the truth of God’s Word and raising lives that reflect His purpose.</p>
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