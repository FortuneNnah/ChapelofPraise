import React from "react";

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
    title: "Jesus Christ",
    text: "We believe Jesus is the Son of God, the Saviour of the world, and the only way to salvation and reconciliation with God.",
  },
  {
    title: "The Holy Spirit",
    text: "We believe the Holy Spirit empowers believers, gives spiritual gifts, and leads us into truth and holiness.",
  },
  {
    title: "Salvation",
    text: "We believe salvation is by grace through faith in Christ, and that every believer is called to a transformed life.",
  },
  {
    title: "The Church",
    text: "We believe the church is the body of Christ, called to worship, discipleship, fellowship, and obedient service.",
  },
];

const values = [
  {
    title: "Community",
    text: "We believe people grow best when they are known, loved, and welcomed into a healthy church family.",
  },
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
    title: "Outreach",
    text: "We carry the love of Christ beyond our walls, reaching people with hope, care, and the gospel.",
  },
  {
    title: "Fellowship",
    text: "We value authentic relationships that support one another in faith, celebration, and times of need.",
  },
];

const milestones = [
  {
    year: "2004",
    title: "A Vision Begins",
    text: "Chapel of Praise was begun with a clear desire to build a worshipping community where people could encounter God and experience real spiritual growth.",
  },
  {
    year: "2010",
    title: "A Growing Family",
    text: "As the fellowship expanded, the church grew in discipleship, worship, and community impact, becoming a place where many found belonging and direction.",
  },
  {
    year: "2020",
    title: "Impact in Every Season",
    text: "Through prayer, service, and steady leadership, the church continued to strengthen its presence in the lives of students, families, and the wider community.",
  },
];

const leaders = [
  {
    name: "Rev. Mama Otobong Umoren",
    role: "Chaplain",
    image: "/imgs/mams2.jpg",
    description: "A compassionate spiritual leader committed to prayer, pastoral care, and nurturing the church family.",
  },

];

export default function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="about-eyebrow">About Chapel of Praise</p>

          <h1>Growing faith. Loving people. Making Christ known.</h1>

          <p className="about-hero-text">
            We are a welcoming church family committed to worship, spiritual growth,
            and living out the love of Christ in a real and practical way.
          </p>

          <div className="about-hero-meta">
            <span>20+ Years of ministry</span>
            <span>500+ Lives impacted</span>
            <span>3 Weekly services</span>
          </div>

          <a href="#who-we-are" className="about-scroll-link">Discover our story</a>
        </div>

        <div className="about-hero-media">
          <img src="/imgs/congregation.jpg" alt="Church congregation worshipping together" />
        </div>
      </section>

      <section className="about-story" id="who-we-are">
        <div className="section-intro">
          <p className="about-kicker">Who We Are</p>
          <h2>A church family rooted in Christ and committed to people.</h2>
        </div>

        <div className="story-layout">
          <div className="story-copy">
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

          <div className="story-image">
            <img src="/imgs/praise1.jpg" alt="Church members gathered in worship" />
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="section-intro centered">
          <p className="about-kicker">Mission & Vision</p>
          <h2>Faith that informs every step we take.</h2>
        </div>

        <div className="mission-grid">
          <article className="mission-block">
            <span className="mission-number">01</span>
            <h3>Our Mission</h3>
            <p>
              To raise devoted followers of Christ who love God, serve people, and
              influence the world with the transforming power of the gospel.
            </p>
          </article>

          <article className="mission-block">
            <span className="mission-number">02</span>
            <h3>Our Vision</h3>
            <p>
              To become a thriving spiritual family where lives are transformed through
              worship, teaching, discipleship, and genuine connection with Christ.
            </p>
          </article>
        </div>
      </section>

      <section className="about-beliefs">
        <div className="section-intro">
          <p className="about-kicker">Our Beliefs</p>
          <h2>Core truths we stand on.</h2>
        </div>

        <div className="beliefs-grid">
          {beliefs.map((belief) => (
            <article className="belief-item" key={belief.title}>
              <span className="belief-pill">{belief.title}</span>
              <p>{belief.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-history">
        <div className="section-intro">
          <p className="about-kicker">Our Story</p>
          <h2>A church shaped by grace, faith, and community.</h2>
        </div>

        <div className="history-timeline">
          {milestones.map((item) => (
            <article className="history-item" key={item.year}>
              <div className="history-year">{item.year}</div>
              <div className="history-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-leadership">
        <div className="section-intro">
          <p className="about-kicker">Leadership</p>
          <h2>Guided by faithful leaders and servant hearts.</h2>
        </div>

        <div className="leaders-grid">
          {leaders.map((leader) => (
            <article className="leader-profile" key={leader.name}>
              <img src={leader.image} alt={leader.name} />
              <div className="leader-body">
                <h3>{leader.name}</h3>
                <span>{leader.role}</span>
                <p>{leader.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-values">
        <div className="section-intro">
          <p className="about-kicker">Community & Values</p>
          <h2>What shapes the way we live and serve.</h2>
        </div>

        <div className="community-grid">
          {values.map((value) => (
            <article className="community-item" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-copy">
          <p className="about-kicker">Join Us</p>
          <h2>We’d love to have you with us.</h2>
        </div>

        <div className="cta-actions">
          <a href="/contact" className="primary-btn">Plan a Visit</a>
          <a href="/contact" className="secondary-btn">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
