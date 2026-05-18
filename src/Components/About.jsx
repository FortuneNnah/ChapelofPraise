import { useState } from "react";
import Footer from './Footer';

// ─── Sub-components ────────────────────────────────────────

function SectionMarker({ label, light = false }) {
  return (
    <div className="section-marker">
      <div className={`marker-dot${light ? " marker-dot--light" : ""}`} />
      <span className={`marker-text${light ? " marker-text--light" : ""}`}>
        {label}
      </span>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="value-card">
      <div className="value-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

function LeaderCard({ initials, name, role, bio }) {
  return (
    <div className="leader-card">
      <div className="leader-avatar">{initials}</div>
      <div>
        <p className="leader-name">{name}</p>
        <p className="leader-role">{role}</p>
        <p className="leader-bio">{bio}</p>
      </div>
    </div>
  );
}

function ServiceCard({ day, name, time }) {
  return (
    <div className="service-card">
      <p className="service-day">{day}</p>
      <p className="service-name">{name}</p>
      <hr className="service-rule" />
      <p className="service-time">{time}</p>
    </div>
  );
}

// ─── Data ──────────────────────────────────────────────────

const values = [
  {
    icon: "📖",
    title: "Word-Centered",
    description:
      "Scripture is our foundation — we preach, teach, and live by God's Word in all things.",
  },
  {
    icon: "🎵",
    title: "Spirit-Led Worship",
    description:
      "Authentic praise and worship are at the heart of every gathering and every life.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "We are stronger together — a family that loves, supports, and lifts one another up.",
  },
  {
    icon: "🌍",
    title: "Outreach",
    description:
      "We carry the Gospel beyond our walls to serve our city and reach the ends of the earth.",
  },
];

const leaders = [
  {
    initials: "PS",
    name: "Pastor Samuel",
    role: "Senior Pastor",
    bio: "A shepherd at heart, leading with humility, vision, and a deep love for God's people.",
  },
  {
    initials: "EG",
    name: "Elder Grace",
    role: "Worship & Prayer",
    bio: "Overseeing worship ministry and prayer culture with passion and devotion to God.",
  },
  {
    initials: "DM",
    name: "Deacon Michael",
    role: "Community & Outreach",
    bio: "Championing service programs that extend the love of Christ into the community.",
  },
];

const services = [
  { day: "Sunday", name: "Sunday Worship", time: "8:00 AM & 10:30 AM" },
  { day: "Wednesday", name: "Bible Study", time: "6:00 PM" },
  { day: "Friday", name: "Prayer & Praise Night", time: "7:00 PM" },
];

// ─── Main Component ─────────────────────────────────────────

export default function AboutUs() {
  return (
    <div id="About" className="about-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Chapel of Praise
          </div>
          <h1>
            Who<br />we <em>are</em>
          </h1>
          <hr className="hero-rule" />
          <p className="hero-desc">
            A community built on faith, moved by worship, and called to make
            a difference — here and across the world.
          </p>
          <div className="hero-stats">
            {[
              { num: "20+", label: "Years of Ministry" },
              { num: "3",   label: "Weekly Services" },
              { num: "1",   label: "Family" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="story-left">
          <SectionMarker label="Our Story" />
          <h2>
            Built on<br />faith &amp;<br /><em>community</em>
          </h2>
        </div>
        <div className="story-right">
          <p>
            Chapel of Praise was founded on the belief that every person
            deserves a place to encounter God, grow in community, and walk in
            their God-given purpose.
          </p>
          <p>
            From humble beginnings, we have grown into a vibrant,
            multi-generational church family — one that celebrates the power
            of worship and the transforming love of Christ.
          </p>
          <p>
            For over two decades, we have been a beacon of hope in our
            community, welcoming all who seek His presence and offering a home
            for healing, belonging, and purpose.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mv-section">
        <div className="mv-panel mv-panel--border">
          <span className="mv-num">01</span>
          <SectionMarker label="Mission" light />
          <h3>Why we exist</h3>
          <p>
            To glorify God by making devoted followers of Jesus Christ who
            love God, love people, and make a lasting impact in the world
            around them.
          </p>
        </div>
        <div className="mv-panel">
          <span className="mv-num">02</span>
          <SectionMarker label="Vision" light />
          <h3>Where we're going</h3>
          <p>
            To be a thriving house of worship where every nation, tongue, and
            tribe finds community, healing, and the fullness of God's love.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="values-head">
          <div>
            <SectionMarker label="Core Values" />
            <h2>What we<br />stand for</h2>
          </div>
          <p>
            The principles that shape how we worship, serve, and live together
            as a church family.
          </p>
        </div>
        <div className="values-list">
          {values.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership">
        <div className="leadership-head">
          <div>
            <SectionMarker label="Leadership" />
            <h2>Our pastoral team</h2>
          </div>
          <p>
            Servant leaders guiding the congregation with humility, wisdom,
            and vision.
          </p>
        </div>
        <div className="leaders-grid">
          {leaders.map((l) => (
            <LeaderCard key={l.name} {...l} />
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="services-head">
          <SectionMarker label="Join Us" light />
          <h2>Service times</h2>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.day} {...s} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div>
          <p className="cta-quote">"Come as you are. Leave transformed."</p>
          <p className="cta-sub">
            You are welcome here — no matter where you're coming from.
          </p>
        </div>
        <button className="cta-btn">Plan Your Visit →</button>
      </section>
          <Footer />
    </div>

  );
}