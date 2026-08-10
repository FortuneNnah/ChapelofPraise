import React from "react";

const Section2 = () => {
  return (
    <div className="section2-container">
              <div className="section2-large-text">
          <h1>We are a more than a <span style={{
            "color": "#007BFF"
          }}>community</span>, We are:</h1>
        </div>
      <div className="section2-layout">
        <div className="section2-visual">
          <div className="section2-image-stack">
            <img className="section2-main-image" src="/imgs/praise1.jpg" alt="Worship service" />
            <img className="section2-side-image" src="/imgs/praise7.jpg" alt="Campus fellowship" />
          </div>
        </div>

        <div className="section2-content">
          <p className="section2-kicker"> A family united by faith</p>
          <h2> A family that helps you grow. </h2>
          <p className='p2'>Join us for clear teaching, honest worship, and practical application that helps you grow in faith and follow Christ more fully.</p>

          <div className="section2-highlights">
            <div className="highlight-card">
              <strong>Sundays</strong>
              <span>Divine Service</span>
              <span className="timestamp">8am & 10am</span>
            </div>
            <div className="highlight-card">
              <strong>Tuesdays</strong>
              <span>Bible Study</span>
              <span className="timestamp">6pm</span>
            </div>
            <div className="highlight-card">
              <strong>Fridays</strong>
              <span>Miracle Service</span>
              <span className="timestamp">6pm</span>
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
