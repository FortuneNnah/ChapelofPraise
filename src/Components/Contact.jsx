import { useState } from "react";
// ─── Data ──────────────────────────────────────────────────

const contactItems = [
  {
    icon: "ti-map-pin",
    label: "Address",
    value: "Pav 2, Akwa Ibom State University, Ikot Akpaden.",
    sub: "Come find us — all are welcome.",
  },
  {
    icon: "ti-phone",
    label: "Phone",
    value: "+234 800 000 0000",
    sub: "Mon – Fri, 9:00 AM – 5:00 PM",
  },
  {
    icon: "ti-mail",
    label: "Email",
    value: "hello@chapelofpraise.org",
    sub: "We reply within 24 hours.",
  },
];

const scheduleItems = [
  { day: "Sunday",    name: "Sunday Worship",       time: "8:00 AM & 10:30 AM" },
  { day: "Tuesday", name: "Midweek Bible Study",   time: "6:00 PM"            },
  { day: "Friday",    name: "Miracle Service", time: "6:00 PM"            },
  { day: "Office",    name: "Pastoral & Admin team", time: "Mon – Fri(9:00 AM – 3:00 PM)"          },
];

const mapChips = [
  { icon: "ti-car",         label: "Parking available" },
  { icon: "ti-accessible",  label: "Accessible"        },
  { icon: "ti-building",    label: "Abuja, FCT"        },
];

const subjectOptions = [
  "General Enquiry",
  "Prayer Request",
  "New Member / First Visit",
  "Pastoral Support",
  "Event & Programme Info",
  "Partnership & Giving",
];

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

function ContactCard({ icon, label, value, sub }) {
  return (
    <div className="contact-card">
      <div className="cc-icon">
        <i className={`ti ${icon}`} aria-hidden="true" />
      </div>
      <div>
        <div className="cc-label">{label}</div>
        <div className="cc-value" style={{ whiteSpace: "pre-line" }}>{value}</div>
      </div>
      <div className="cc-sub">{sub}</div>
    </div>
  );
}

function ScheduleItem({ day, name, time }) {
  return (
    <div className="sched-item">
      <div>
        <div className="sched-day">{day}</div>
        <div className="sched-name">{name}</div>
      </div>
      <div className="sched-time">{time}</div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:  "",
    email:     "",
    phone:     "",
    subject:   "",
    message:   "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="contact-page">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-glow" />

        <div className="contact-hero-left">
          <div className="c-tag">
            <span className="c-tag-dot" />
            Contact Us
          </div>
          <h1>
            Let's<br /><span>Meet You</span>
          </h1>
          <hr className="c-hero-rule" />
          <p className="c-hero-desc">
            We'd love to hear from you. Whether it's a question, a prayer
            request, or a first visit enquiry. Our team is always ready to
            welcome you.
          </p>
        </div>

        <div className="contact-hero-right">
          <p className="c-tagline">
            "There is no stranger here,<br />only family yet to meet."
          </p>
          <div className="c-stats">
            {[
              { num: "20+", label: "Years of Ministry"    },
              { num: "3",  label: "Weekly Services"   },
              { num: "24h", label: "Response Time" },
            ].map((s) => (
              <div className="c-stat" key={s.label}>
                <div className="c-stat-num">{s.num}</div>
                <div className="c-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ────────────────────────────────── */}
      <div className="contact-cards-row">
        {contactItems.map((item) => (
          <ContactCard key={item.label} {...item} />
        ))}
      </div>

      {/* ── SCHEDULE + MAP ───────────────────────────────── */}
      <div className="contact-split">

        {/* Schedule */}
        <div className="schedule-panel">
          <SectionMarker label="Join Us" />
          <h2>Service<br />schedule</h2>
          <p className="schedule-intro">
            Pick a time that works for you. Everyone is welcome at every
            service.
          </p>
          <div className="schedule-list">
            {scheduleItems.map((s) => (
              <ScheduleItem key={s.day} {...s} />
            ))}
          </div>
          <span className="sched-badge">All services open to everyone</span>
        </div>

        {/* Map */}
        <div className="map-panel">
          <SectionMarker label="Find Us" light />
          <h2>Our<br />location</h2>
          <div className="map-frame">
            <i className="ti ti-map-2" aria-hidden="true" />
            <p className="map-placeholder-text">Embed your Google Map here</p>
          </div>
          <div className="map-chips">
            {mapChips.map((chip) => (
              <div className="map-chip" key={chip.label}>
                <i className={`ti ${chip.icon}`} aria-hidden="true" />
                {chip.label}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── FORM ─────────────────────────────────────────── */}
      <section className="form-section">

        <div className="form-header">
          <div>
            <SectionMarker label="Message Us" />
            <h2>
              Send us a<br /><span>message</span>
            </h2>
          </div>
          <p className="form-intro">
            Whether you have a question about our services, want to make a
            prayer request, or simply want to reach out — we're here. Fill in
            the form and we'll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "48px 0" }} role="status" aria-live="polite" aria-atomic="true">
            <div style={{
              width: 56, height: 56, borderRadius: "50%",
              background: "rgba(18,18,42,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 16px", fontSize: 24, color: "var(--navy)"
            }}>
              <i className="ti ti-check" aria-hidden="true" />
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 26, fontWeight: 600, color: "var(--navy)", marginBottom: 8
            }}>
              Message received!
            </h3>
            <p style={{
              fontSize: 13, fontWeight: 300, color: "var(--grey)",
              lineHeight: 1.7, maxWidth: 320, margin: "0 auto 24px"
            }}>
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              className="submit-btn"
              onClick={() => { setSubmitted(false); setFormData({ firstName:"", lastName:"", email:"", phone:"", subject:"", message:"" }); }}
              aria-label="Send another message"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <div className="form-grid">
              <div className="f-field">
                <label htmlFor="firstName">First Name <span aria-label="required">*</span></label>
                <input
                  id="firstName" name="firstName" type="text"
                  placeholder="John"
                  value={formData.firstName} onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="First Name (required)"
                />
              </div>
              <div className="f-field">
                <label htmlFor="lastName">Last Name <span aria-label="required">*</span></label>
                <input
                  id="lastName" name="lastName" type="text"
                  placeholder="Doe"
                  value={formData.lastName} onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Last Name (required)"
                />
              </div>
              <div className="f-field">
                <label htmlFor="email">Email Address <span aria-label="required">*</span></label>
                <input
                  id="email" name="email" type="email"
                  placeholder="you@example.com"
                  value={formData.email} onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Email Address (required)"
                />
              </div>
              <div className="f-field">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone" name="phone" type="tel"
                  placeholder="+234 800 000 0000"
                  value={formData.phone} onChange={handleChange}
                  aria-label="Phone number (optional)"
                />
              </div>
              <div className="f-field full">
                <label htmlFor="subject">Subject <span aria-label="required">*</span></label>
                <div className="f-select-wrap">
                  <select
                    id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    required
                    aria-required="true"
                    aria-label="Subject (required) - select a topic"
                  >
                    <option value="" disabled>Select a topic…</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <i className="ti ti-chevron-down" aria-hidden="true" />
                </div>
              </div>
              <div className="f-field full">
                <label htmlFor="message">Message <span aria-label="required">*</span></label>
                <textarea
                  id="message" name="message"
                  placeholder="Write your message here…"
                  value={formData.message} onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Your message (required)"
                />
              </div>
            </div>

            <div className="form-footer">
              <div className="form-note">
                <i className="ti ti-lock" aria-hidden="true" />
                Your message is private and secure.
              </div>
              <button className="submit-btn" type="submit" aria-label="Send message to Chapel Of Praise">
                Send Message
                <i className="ti ti-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}