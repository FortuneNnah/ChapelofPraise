import React from "react";
import ArrowIcon from "../Components/ArrowIcon";
import './Section.css';

/* ------------------------------------------------------------
   SECTION 3 — A place to encounter God
   Styles live in home-sections.css (classes start with "encounter-").
   Your ArrowIcon component is kept exactly where it was.
   (The unused FaArrowRight import was removed.)
   ------------------------------------------------------------ */

const Section3 = () => {
  return (
    <section className="encounter" aria-labelledby="encounter-title">
      <div className="encounter-inner">
        <div className="encounter-panel">
          <p className="encounter-kicker">We are a place to encounter God</p>

          <h2 id="encounter-title" className="encounter-title">
            <span className="encounter-accent">Worship</span> that lifts, teaches,
            and strengthens.
          </h2>

          <p className="encounter-copy">
            We create space for prayer, worship, and honest encouragement so
            every person can experience God’s presence and find hope in
            community.
          </p>

          <div className="encounter-action">
            <ArrowIcon />
          </div>
        </div>

        <div className="encounter-gallery">
          <img className="encounter-img encounter-img-tall" src="/imgs/slide4.jpg" alt="Worship gathering" />
          <img className="encounter-img" src="/imgs/slide3.jpg" alt="Prayer and fellowship" />
          <img className="encounter-img" src="/imgs/praise7.jpg" alt="Campus fellowship" />
        </div>
      </div>
    </section>
  );
};

export default Section3;