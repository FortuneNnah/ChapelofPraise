import React from "react";
import './Section.css';

/* ------------------------------------------------------------
   SECTION 2 — "We are more than a community"
   Styles live in home-sections.css (classes start with "family-").
   The service times are a list, so they are easy to edit.
   ------------------------------------------------------------ */

const services = [
  { day: "Sundays", title: "Divine Service", time: "8am & 10am" },
  { day: "Tuesdays", title: "Bible Study", time: "6pm" },
  { day: "Fridays", title: "Miracle Service", time: "6pm" },
];

const Section2 = () => {
  return (
    <section className="family" aria-labelledby="family-headline">
      <div className="family-inner">
        {/* Now an h2: the hero already has the page's one h1 */}
        <h2 id="family-headline" className="family-headline">
          We are a more than a <span className="family-accent">community</span>, We are:
        </h2>

        <div className="family-layout">
          <div className="family-visual">
            <div className="family-stack">
              <img className="family-main" src="/imgs/praise1.jpg" alt="Worship service" />
              <img className="family-side" src="/imgs/praise7.jpg" alt="Campus fellowship" />
            </div>
          </div>

          <div className="family-content">
            <p className="family-kicker">A family united by faith</p>
            <h3 className="family-title">A family that helps you grow.</h3>
            <p className="family-lead">
              Join us for clear teaching, honest worship, and practical
              application that helps you grow in faith and follow Christ more
              fully.
            </p>

            <ul className="family-services">
              {services.map((service) => (
                <li key={service.day} className="family-service">
                  <strong>{service.day}</strong>
                  <span>{service.title}</span>
                  <span className="family-time">{service.time}</span>
                </li>
              ))}
            </ul>

            <blockquote className="family-quote">
              <p>
                “Why we are the biggest family on campus?” Because we grow
                together, serve together, and stay together in Christ.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;