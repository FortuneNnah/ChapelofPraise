import React from "react";
import './Section.css';

/* ------------------------------------------------------------
   SECTION 1 — Meet our Chaplain
   Styles live in home-sections.css (classes start with "chaplain-").
   ------------------------------------------------------------ */

const Section1 = () => {
  return (
    <section className="chaplain" aria-labelledby="chaplain-name">
      <div className="chaplain-inner">
        {/* Photo with an offset blue block behind it and a name tag on top */}
        <div className="chaplain-visual">
          <figure className="chaplain-photo">
            <img
              src="/imgs/mams4.jpg"
              alt="Rev. Mrs. Otobong Umoren, chaplain of Chapel Of Praise"
            />
          </figure>
          <span className="chaplain-badge">Chaplain</span>
        </div>

        <div className="chaplain-text">
          <p className="chaplain-kicker">Meet our Chaplain</p>

          {/* Read aloud this is still "Rev. Mrs. Otobong Umoren" */}
          <h2 id="chaplain-name" className="chaplain-name">
            <span className="chaplain-name-small">Rev. Mrs.</span>{" "}
            <span className="chaplain-name-first">Otobong</span>{" "}
            <span className="chaplain-name-last">Umoren</span>
          </h2>

          <p className="chaplain-lead">
            Rev. Mrs. Otobong Umoren has been the chaplain of our church for
            several years, bringing wisdom, compassion, and spiritual guidance
            to our community.
          </p>

          {/* TODO: replace this placeholder paragraph with the chaplain's real story */}
          <p className="chaplain-copy">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            numquam, consectetur molestias omnis alias distinctio iure tenetur,
            aperiam suscipit quam amet reiciendis adipisci quo accusamus quia
            quis et in voluptates.
          </p>

          {/* Optional button, kept from your original (commented out):
          <Link to="/about" className="chaplain-btn">More about the church</Link>
          (import { Link } from "react-router-dom" if you turn it on) */}
        </div>
      </div>
    </section>
  );
};

export default Section1;