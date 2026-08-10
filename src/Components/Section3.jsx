import React from "react";

const Section3 = () => {
  return (
    <div className="section3-container">
      <div className="section3-showcase">
        <div className="section3-panel">
          <p className="section3-kicker">WE ARE A place to encounter God</p>
          <h2>Worship that lifts, teaches, and strengthens.</h2>
          <p className="section3-copy">
            We create space for prayer, worship, and honest encouragement so every
            person can experience God’s presence and find hope in community.
          </p>
          <a href="/about">More about us</a>
        </div>

        <div className="section3-gallery">
          <img src="/imgs/slide4.jpg" alt="Worship gathering" />
          <img src="/imgs/slide3.jpg" alt="Prayer and fellowship" />
          <img src="/imgs/praise7.jpg" alt="Campus fellowship" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
