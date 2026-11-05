import React, { useEffect, useState } from "react";
import CircularGallery from "../Components/CircularGallery";

/* ------------------------------------------------------------
   HOW TO ADD A CAPTION
   Every photo has a `text` field. Whatever you type there shows
   under that photo in the gallery. Leave it as "" for no caption.

   Example:  { src: "/imgs/slide9.jpg", text: "Sunday Worship" },
   Captions wrap onto multiple lines when needed and keep the same font size.
   ------------------------------------------------------------ */
const images = [
  { src: "/imgs/slide9.jpg",    text: "We gather to have fun." }, // <-- ADD YOUR CAPTION HERE
  { src: "/imgs/slide2.jpg",    text: "Our worship is our weapon." }, 
  { src: "/imgs/slide3.jpg",    text: "We worship the most high." }, 
  { src: "/imgs/slide6.jpg",    text: "We have our victory dance." }, 
  { src: "/imgs/slide5.jpg",    text: "We are united as one in Christ." }, 
  { src: "/imgs/slide8.jpg",    text: "We don't hold back our praise." }, 
  { src: "/imgs/worship1.jpg",  text: "We worship with our whole heart." }, 
];

// Built once, outside the component. If this were built inside the
// component, every re-render would hand the gallery a brand new list and
// it would rebuild itself from scratch (a visible flicker).
const galleryItems = images.map((img) => ({ image: img.src, text: img.text }));

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="gallery-section">
      {/* Section heading (an h2: the hero already has the page's one h1) */}
      <div className="gallery-heading">
        <span className="overhead">Our Moments</span>
        <h2>Life at Chapel Of Praise</h2>
        <p className="gallery-sub">
          A glimpse into our vibrant church life — worship, fellowship, and
          service.
        </p>
      </div>

      <div className="circular-gallery-wrapper">
        <CircularGallery
          items={galleryItems}
          bend={isMobile ? 0.6 : 3}
          textColor="#000"
          borderRadius={0.05}
          scrollEase={isMobile ? 0.09 : 0.02}
          fontUrl="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          font=" 13px poppins"
          fontWeight={600}
        />
      </div>
    </section>
  );
};

export default Gallery;