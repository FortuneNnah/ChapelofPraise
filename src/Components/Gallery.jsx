import React, { useState } from "react";

const images = [
  { src: "/imgs/slide9.jpg", caption: "Sunday Worship Service" },
  { src: "/imgs/slide2.jpg", caption: "Sunday Worship Service" },
  { src: "/imgs/slide3.jpg", caption: "Sunday Worship Service" },
  { src: "/imgs/slide4.jpg", caption: "Sunday Worship Service" },
  { src: "/imgs/slide5.jpg", caption: "Sunday Worship Service" },
  { src: "/imgs/slide6.jpg", caption: "Sunday Worship Service" },
  { src: "/imgs/slide7.jpg", caption: "Sunday Worship Service" },
  { src: "/imgs/slide2.jpg", caption: "Sunday Worship Service" },
  { src: "/imgs/praise3.jpg", caption: "Sunday Worship Service" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight")
      setLightboxIndex((prev) => (prev + 1) % images.length);
    if (e.key === "ArrowLeft")
      setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="gallery-section"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Section heading */}
      <div className="gallery-heading">
        <span className="overhead">Our Moments</span>
        <h1>Life at Chapel Of Praise</h1>
        <p className="gallery-sub">
          A glimpse into our vibrant community — worship, fellowship, and
          service.
        </p>
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            aria-label={`View ${img.caption}`}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
          >
            <img src={img.src} alt={img.caption} loading="lazy" />
            <div className="gallery-item-overlay">
              <span className="gallery-item-caption">{img.caption}</span>
              <svg
                className="gallery-expand-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={goPrev}
            aria-label="Previous"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].caption}
            />
            <p className="lightbox-caption">{images[lightboxIndex].caption}</p>
            <span className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </span>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={goNext}
            aria-label="Next"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
