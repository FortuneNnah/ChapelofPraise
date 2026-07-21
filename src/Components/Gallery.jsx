import React, { useState } from "react";
import CircularGallery from "./CircularGallery";

const images = [
  { src: "/imgs/slide9.jpg"},
  { src: "/imgs/slide2.jpg"},
  { src: "/imgs/slide3.jpg"},
  { src: "/imgs/slide4.jpg"},
  { src: "/imgs/slide5.jpg"},
  { src: "/imgs/slide6.jpg"},
  { src: "/imgs/slide7.jpg"},
  { src: "/imgs/slide2.jpg"},
  { src: "/imgs/praise3.jpg"},
  { src: "/imgs/praise3.jpg"},
  
];

const Gallery = () => {

  return (
    <section
      className="gallery-section"
      tabIndex={-1}
    >
      {/* Section heading */}
      <div className="gallery-heading">
        <span className="overhead">Our Moments</span>
        <h1>Life at Chapel Of Praise</h1>
        <p className="gallery-sub">
          A glimpse into our vibrant church life — worship, fellowship, and
          service.
        </p>
      </div>

      <div className="circular-gallery-wrapper">
        <CircularGallery
          items={images.map((img) => ({ image: img.src }))}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
          font="bold 30px Orbitron"
        />
      </div>
    </section>
  );
};

export default Gallery;
