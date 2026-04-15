import React from "react";

export const Header = () => {
  return (
    <div className="Header-container">
      <div className="logo">
        <img src="/chapel logo.png" alt="" />
        <h3>Chapel Of Praise</h3>
      </div>
      <ul className="navlinks">
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
  <div className="Hero-container">

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
