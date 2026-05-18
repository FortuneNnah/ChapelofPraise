import React from "react";
import Footer from "./Footer";

const values = [
  {
    title: "Faith",
    text: "Everything we do is rooted in the Word of God and centered on Christ.",
  },
  {
    title: "Community",
    text: "We believe growth happens best in a loving and authentic family.",
  },
  {
    title: "Worship",
    text: "We create an atmosphere where people can genuinely encounter God.",
  },
  {
    title: "Impact",
    text: "We are committed to transforming lives within and beyond the church.",
  },
];

const leaders = [
  {
    initials: "PS",
    name: "Pastor Samuel",
    role: "Senior Pastor",
  },
  {
    initials: "EG",
    name: "Elder Grace",
    role: "Worship Leader",
  },
  {
    initials: "DM",
    name: "Deacon Michael",
    role: "Community Outreach",
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />

        <div className="hero-content">
          <span className="hero-label">CHAPEL OF PRAISE</span>

          <h1>
            Building people.
            <br />
            Growing faith.
            <br />
            Transforming lives.
          </h1>

          <p>
            A modern church community helping people experience God, discover
            purpose, and live impactful lives through faith, worship, and
            connection.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Plan Your Visit</button>
            <button className="secondary-btn">Watch Online</button>
          </div>
        </div>

        <div className="hero-card">
          <div>
            <h3>20+</h3>
            <span>Years of Ministry</span>
          </div>

          <div>
            <h3>500+</h3>
            <span>Lives Impacted</span>
          </div>

          <div>
            <h3>3</h3>
            <span>Weekly Services</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="section-tag">ABOUT US</div>

        <div className="about-grid">
          <div>
            <h2>A church focused on people, purpose, and God's presence.</h2>
          </div>

          <div className="about-text">
            <p>
              Chapel of Praise was founded with a vision to create a place where
              people from every background can encounter God and grow
              spiritually in a welcoming environment.
            </p>

            <p>
              Over the years, we’ve become more than a church building — we are
              a family committed to worship, discipleship, outreach, and making
              a lasting difference in our community.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="section-header">
          <div>
            <span className="section-tag">OUR VALUES</span>
            <h2>What defines us</h2>
          </div>

          <p>
            The culture and principles that shape every gathering, conversation,
            and community experience.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <div className="value-card" key={value.title}>
              <div className="value-line" />

              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <div className="mission-card dark">
          <span>01</span>

          <h3>Our Mission</h3>

          <p>
            To raise devoted followers of Christ who love God, serve people, and
            influence the world positively.
          </p>
        </div>

        <div className="mission-card light">
          <span>02</span>

          <h3>Our Vision</h3>

          <p>
            To become a thriving spiritual community where lives are transformed
            through worship, teaching, and genuine connection.
          </p>
        </div>
      </section>

      {/* LEADERS */}
      <section className="leaders-section">
        <div className="section-header">
          <div>
            <span className="section-tag">LEADERSHIP</span>
            <h2>Meet our Leaders</h2>
          </div>

          <p>
            Passionate servant leaders guiding the church with wisdom, humility,
            and vision.
          </p>
        </div>

        <div className="leaders-grid">
          {leaders.map((leader) => (
            <div className="leader-card" key={leader.name}>
              <div className="leader-avatar">{leader.initials}</div>

              <h3>{leader.name}</h3>

              <span>{leader.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="services-content">
          <span className="section-tag light">JOIN US</span>

          <h2>Service Times</h2>

          <div className="service-list">
            <div className="service-item">
              <div>
                <h3>Sunday Worship</h3>
                <p>Main Auditorium</p>
              </div>

              <span>8:00AM & 10:30AM</span>
            </div>

            <div className="service-item">
              <div>
                <h3>Bible Study</h3>
                <p>Midweek Gathering</p>
              </div>

              <span>Wednesday • 6PM</span>
            </div>

            <div className="service-item">
              <div>
                <h3>Prayer & Praise</h3>
                <p>Worship Night</p>
              </div>

              <span>Friday • 7PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div>
          <span className="section-tag">YOU BELONG HERE</span>

          <h2>Come experience a place filled with faith and purpose.</h2>
        </div>

        <button className="primary-btn">Visit This Sunday</button>
      </section>
      <Footer />
    </div>
  );
}
