import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Gallery from "./Gallery";
import './Hero.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="Header-container">
      <div className="logo">
        <img src="/imgs/chapel logo.png" alt="Chapel Of Praise Logo" />
        <h3>Chapel Of Praise</h3>
      </div>

      <button
        type="button"
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
      </button>

      <ul className={`navlinks ${isMenuOpen ? "mobile-menu-open" : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu} className={linkClass}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={linkClass}>About</NavLink>
        </li>
        <li>
          <NavLink to="/units" onClick={closeMenu} className={linkClass}>Units</NavLink>
        </li>
        <li>
          <NavLink to="/sermons" onClick={closeMenu} className={linkClass}>Sermons</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu} className={linkClass}>Contact Us</NavLink>
        </li>
      </ul>
    </header>
  );
};

/* ------------------------------------------------------------
   HERO — poster-style layout
   Stack (top to bottom):
   1. small "The Biggest" label  +  italic welcome line
   2. giant "FAMILY" word (the memorable element)
   3. photo band that overlaps the bottom of the giant word,
      with an "On Campus" pill sitting on the overlap
   4. text card + buttons (floats over the photo on desktop,
      sits underneath on mobile)

   Photo: copy mams2.jpg into /public/imgs/
   ------------------------------------------------------------ */
export const Hero = () => {
  return (
    <section id="Home" className="cop-hero">
      {/* Decorative backdrop: soft glows + paper grain (hidden from screen readers) */}
      <div className="cop-hero-bg" aria-hidden="true"></div>

      <div className="cop-hero-inner">
        <p className="cop-hero-eyebrow">Welcome to Chapel Of Praise</p>

        {/* The real page headline, so it stays the one h1.
            Read aloud it is still "The Biggest Family On Campus". */}
        <h1 className="cop-hero-title">
          <span className="cop-hero-title-small">The Biggest</span>{" "}
          <span className="cop-hero-title-giant">Family</span>{" "}
          <span className="cop-hero-title-tag">On Campus</span>
        </h1>

        <div className="cop-hero-stage">
          <figure className="cop-hero-photo">
            <img
              src="/imgs/mams2.jpg"
              alt="A minister speaking from the pulpit during a service at Chapel Of Praise"
            />

            {/* Location tag on the photo */}
            <span className="cop-hero-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              AKSU Main Campus
            </span>
          </figure>

          <div className="cop-hero-card">
            <p>
              We are a church family committed to sharing the truth of God’s
              Word and raising lives that reflect His purpose.
            </p>

            <div className="cop-hero-actions">
              {/* Change these destinations to wherever each action should go */}
              <Link to="/contact" className="cop-btn cop-btn-primary">
                Become a member
              </Link>
              <Link to="/about" className="cop-btn cop-btn-outline">
                Join a service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Herosection = () => {
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Gallery />
    </>
  );
};

export default Herosection;