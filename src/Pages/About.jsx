import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

/* ------------------------------------------------------------
   ABOUT PAGE — redesigned to match the new hero, sermons,
   contact, units and home sections (giant gradient type, cream /
   white / navy section rhythm, rounded cards, pill buttons).

   Your content lists are unchanged. All class names start with
   "ab-" (styles are in about.css).

   Page rhythm: hero (cream) -> story (white) -> vision (navy)
   -> beliefs (cream) -> history (white) -> chaplain card (cream)
   -> values (navy) -> join band
   ------------------------------------------------------------ */

   

const beliefs = [
  {
    title: "The Bible",
    text: "We believe the Bible is the inspired and authoritative Word of God, guiding every part of life and ministry.",
  },
  {
    title: "God the Father",
    text: "We believe in one God who is loving, holy, just, and eternally present in the lives of His people.",
  },
  {
    title: "God the Son",
    text: "We believe Jesus is the Son of God, the Saviour of the world, and the only way to salvation and reconciliation with God.",
  },
  {
    title: "God the Spirit",
    text: "We believe the Holy Spirit empowers believers, gives spiritual gifts, and leads us into truth and holiness.",
  },
];

const values = [
  {
    title: "Worship",
    text: "We honour God through heartfelt worship, prayer, and a life marked by reverence and gratitude.",
  },
  {
    title: "Discipleship",
    text: "We are committed to helping believers grow in faith, maturity, and obedience to Christ.",
  },
  {
    title: "Service",
    text: "We serve with compassion and purpose, meeting needs and making a tangible difference in our communities.",
  },
  {
    title: "Fellowship",
    text: "We value authentic relationships that support one another in faith, celebration, and times of need.",
  },
];

const milestones = [
  
  {
    year: "2013",
    title: "A Vision Begins",
    text: "Chapel of Praise was begun with a clear desire to build a worshipping community where people could encounter God and experience real spiritual growth.",
  },
  {
    year: "2019",
    title: "A Growing Family",
    text: "As the fellowship expanded, the church grew in discipleship, worship, and community impact, becoming a place where many found belonging and direction.",
  },
  {
    year: new Date().getFullYear(),
    title: "Impact in Every Season",
    text: "Through prayer, service, and steady leadership, the church continued to strengthen its presence in the lives of students, families, and the wider community.",
  },
];

// The leadership section shows one card: the chaplain
const chaplain = {
  name: "Rev. Mama Otobong Umoren",
  role: "Chaplain",
  image: "/imgs/mams2.jpg",
  description: "A compassionate spiritual leader committed to prayer, pastoral care, and nurturing the church family.",
};

// 3 -> "03"
const padNumber = (n) => String(n).padStart(2, "0");

export default function AboutUs() {
  return (
    <div className="ab-page">
      {/* ===== Hero ===== */}
      <section className="ab-hero">
        <div className="ab-hero-copy">
          <p className="ab-eyebrow">About Chapel of Praise</p>

          {/* One h1. Read aloud it is still
              "Growing faith. Loving people. Making Christ known." */}
          <h1 className="ab-title">
            <span className="ab-title-line ab-title-accent">Growing faith.</span>{" "}
            <span className="ab-title-line">Loving people.</span>{" "}
            <span className="ab-title-line ab-title-accent">Making Christ known.</span>
          </h1>

          <p className="ab-hero-text">
            We are a welcoming church family committed to worship, spiritual growth,
            and living out the love of Christ in a real and practical way.
          </p>

          <ul className="ab-hero-meta">
            <li>13+ Years of ministry</li>
            <li>Thousand of lives impacted</li>
            <li>3 Weekly services</li>
          </ul>

          <div className="ab-hero-actions">
            <a href="#who-we-are" className="ab-btn ab-btn-primary">Discover our story</a>
            <Link to="/contact" className="ab-btn ab-btn-outline">Plan a visit</Link>
          </div>
        </div>

        {/* Photo with an offset blue block behind it */}
        <div className="ab-hero-visual">
          <figure className="ab-hero-photo">
            <img src="/imgs/slide6.jpg" alt="Church congregation worshipping together" />
          </figure>
        </div>
      </section>

      {/* ===== Who we are ===== */}
      <section className="ab-sec ab-sec-white" id="who-we-are">
        <div className="ab-inner">
          <div className="ab-intro">
            <p className="ab-kicker">Who We Are</p>
            <h2>A church family rooted in Christ and committed to people.</h2>
          </div>

          <div className="ab-story">
            <div className="ab-story-copy">
              <p>
                Chapel of Praise exists to help people encounter God, discover purpose,
                and grow in faith through a warm and genuine church community.
              </p>

              <p>
                We believe church is more than a Sunday gathering. It is a family of
                believers who worship together, support one another, and reach out with
                compassion to the wider community.
              </p>
            </div>

            <div className="ab-story-visual">
              <figure className="ab-story-photo">
                <img src="/imgs/praise1.jpg" alt="Church members gathered in worship" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Vision, mission, goal (navy) ===== */}
      <section className="ab-sec ab-sec-navy">
        <div className="ab-inner">
          <div className="ab-intro ab-intro-center">
            <p className="ab-kicker">Our Vision</p>
            <h2>
              The enthronement of the <span className="ab-accent">Lord Jesus Christ</span> as the
              sovereign King in lives and destinies on campus.
            </h2>
          </div>

          <div className="ab-mission-grid">
            <article className="ab-mission-card">
              <span className="ab-mission-num" aria-hidden="true">01</span>
              <h3>Our Mission</h3>
              <p>
                To blanket Akwa Ibom State University and it's environment with God's Presence by the administration of the benefits of Redemption, through the ministry of the Word and the demonstration of power evident in the salvation of souls, healings, deliverances and total restoration of lives and destinies.
                (Numbers 14:21, Isaiah 11:9 and Habakkuk 2:14, Revelations 5:12)
              </p>
            </article>

            <article className="ab-mission-card">
              <span className="ab-mission-num" aria-hidden="true">02</span>
              <h3>Our Goal</h3>
              <p>
                To point humanity to their Glorious destinies in Christ by the help of the Holy Spirit, subduing and dominating their territories now - and possess Heaven at the end.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Beliefs ===== */}
      <section className="ab-sec">
        <div className="ab-inner">
          <div className="ab-intro">
            <p className="ab-kicker">Our Beliefs</p>
            <h2>Core truths we <span className="ab-accent">stand</span> on.</h2>
          </div>

          <div className="ab-grid ab-grid-3">
            {beliefs.map((belief, index) => (
              <article className="ab-card" key={belief.title}>
                <span className="ab-card-num" aria-hidden="true">{padNumber(index + 1)}</span>
                <span className="ab-pill">{belief.title}</span>
                <p>{belief.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== History ===== */}
      <section className="ab-sec ab-sec-white">
        <div className="ab-inner">
          <div className="ab-intro">
            <p className="ab-kicker">Our Story</p>
            <h2>A church shaped by grace, faith, and community.</h2>
          </div>

          <div className="ab-timeline">
            {milestones.map((item) => (
              <article className="ab-milestone" key={item.year}>
                <div className="ab-year">{item.year}</div>
                <div className="ab-milestone-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Leadership ===== */}
      <section className="ab-sec">
        <div className="ab-inner">
          <div className="ab-intro">
            <p className="ab-kicker">Leadership</p>
            <h2>Guided by a faithful leader.</h2>
          </div>

          {/* One featured card: photo on one side, details on the other */}
          <article className="ab-chaplain">
            <figure className="ab-chaplain-photo">
              <img src={chaplain.image} alt={chaplain.name} />
            </figure>

            <div className="ab-chaplain-body">
              <span className="ab-pill">{chaplain.role}</span>
              <h3>{chaplain.name}</h3>
              <p>{chaplain.description}</p>
            </div>
          </article>
        </div>
      </section>

      {/* ===== Values (navy) ===== */}
      <section className="ab-sec ab-sec-navy">
        <div className="ab-inner">
          <div className="ab-intro">
            <p className="ab-kicker">Community & Values</p>
            <h2>What shapes the way we <span className="ab-accent">live</span> and serve.</h2>
          </div>

          <div className="ab-grid ab-grid-3">
            {values.map((value) => (
              <article className="ab-value" key={value.title}>
                <span className="ab-value-bar" aria-hidden="true"></span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Join band ===== */}
      <section className="ab-join">
        <div className="ab-join-copy">
          <p className="ab-kicker ab-kicker-light">Join Us</p>
          <h2>We’d love to have you with us.</h2>
        </div>

        <div className="ab-join-actions">
          <Link to="/contact" className="ab-btn ab-btn-light">Plan a Visit</Link>
          <Link to="/contact" className="ab-btn ab-btn-ghost">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}