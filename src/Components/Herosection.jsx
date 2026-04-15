import React from "react";

export const Header = () => {
  return(
  <div className="Header-container">
    <img src="public/chapel logo.png" alt="" />

  </div>
  );
};



export const Hero = () => {
  return(
    <div className="Hero-container">
      <h1></h1>
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

export default Hero;
