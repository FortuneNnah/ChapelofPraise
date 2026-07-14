import React from "react";

const Section2 = () => {
  return (
    <div className="section2-container">
      <div className="section2-layout">
        <div className="section2-visual">
          <div className="section2-image-stack">
            <img className="section2-main-image" src="/imgs/praise1.jpg" alt="Worship service" />
            <img className="section2-side-image" src="/imgs/praise7.jpg" alt="Campus fellowship" />
          </div>
        </div>

        <div className="section2-content">
          <p className="section2-kicker">A family united by faith</p>
          <h2>Worship that lifts, teaches, and strengthens.</h2>
          <p className="section2-copy">
            We gather in joyful worship, grow through sound teaching, and build lasting
            relationships that carry us through every season of life.
          </p>

          <div className="section2-highlights">
            <div className="highlight-card">
              <strong>Weekly</strong>
              <span>Spirit-filled gatherings</span>
            </div>
            <div className="highlight-card">
              <strong>Campus</strong>
              <span>Wide community presence</span>
            </div>
            <div className="highlight-card">
              <strong>Life</strong>
              <span>Rooted in purpose and fellowship</span>
            </div>
          </div>

          <div className="section2-quote">
            <p>“Why we are the biggest family on campus?” Because we grow together, serve together, and stay together in Christ.”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
