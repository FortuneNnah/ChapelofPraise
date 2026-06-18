import React from "react";

const sermons = [
  {
    id: 1,
    title: "Grace Unmerited",
    pastor: "Rev. G. George Udoh",
    date: "June 16, 2024",
    description: "Explore the transformative power of God's grace and how it shapes every aspect of our spiritual journey.",
  },
  {
    id: 2,
    title: "Walking in Faith",
    pastor: "Rev. G. George Udoh",
    date: "June 9, 2024",
    description: "Learn practical ways to strengthen your faith through prayer, Scripture, and personal reflection.",
  },
  {
    id: 3,
    title: "The Power of Prayer",
    pastor: "Rev. Mama Otobong Umoren",
    date: "June 2, 2024",
    description: "Discover how prayer connects us with God's heart and transforms our circumstances and relationships.",
  },
];

const Section2 = () => {
  return (
    <section className="section2-container" aria-labelledby="sermons-heading">
      <div className="section1-content">
        <div className="text">
          <h2 id="sermons-heading">Worship That Honors God</h2>
          <p className="p1">
            Our worship is heartfelt and reverent, offering praise to the Savior
            with gratitude and joy.
          </p>
          <p className="p2">
            Experience a place where music, prayer, and praise lift hearts toward
            God and invite His presence into every service.
          </p>
        </div>
        <div className="imgs">
          <img className="img1" src="/imgs/praise1.jpg" alt="Congregation in worship during Sunday service" />
          <img className="img2" src="/imgs/praise7.jpg" alt="Prayer and praise moment during worship" />
        </div>
      </div>

      {/* Recent Sermons */}
      <div className="sermons-list" role="region" aria-label="Recent sermons">
        <div className="sermons-header">
          <h3>Recent Sermons</h3>
          <p className="sermons-subtitle">Timeless messages that transform lives and deepen your faith.</p>
        </div>
        
        <div className="sermons-grid">
          {sermons.map((sermon) => (
            <article className="sermon-card" key={sermon.id}>
              <div className="sermon-meta">
                <span className="sermon-date">{sermon.date}</span>
                <span className="sermon-pastor">By {sermon.pastor}</span>
              </div>
              <h4 className="sermon-title">{sermon.title}</h4>
              <p className="sermon-description">{sermon.description}</p>
              <button className="sermon-btn" aria-label={`Listen to sermon: ${sermon.title}`}>Listen Now</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
