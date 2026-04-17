import React, { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header-container">
      <div className="logo">
        <img src="/chapel logo.png" alt="" />
        <h3>Chapel Of Praise</h3>
      </div>

      {/* Hamburger Menu Button - Hidden on desktop */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <ul className={`navlinks ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Units</li>
        <li>Sermons</li>
        <li>Contact Us</li>
      </ul>
      <button id="herobtn" className="herobtn">Join Us</button>
    </div>
  );
};

export const Hero = () => {
  return(
  <div className="Hero-section">
    <div className="overlay"></div>
    <div className="Hero-container">
      <h1>Welcome home to <br />Chapel Of Praise</h1>
      <p>No matter where you are on your journey, you are always welcome here.</p>
      <p>Whether you're looking for answers or a place to belong, we invite you to join our us.</p>
    </div>
  </div>
)};

const Herosection = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Herosection;
