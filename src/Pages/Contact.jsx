import { useState } from "react";

const contactItems = [
  {
    label: "Address",
    value: "Pav 2, Akwa Ibom State University, Ikot Akpaden.",
    meta: "Come find us — all are welcome.",
    href: "https://maps.google.com/?q=Pav+2+Akwa+Ibom+State+University+Ikot+Akpaden",
    type: "map",
  },
  {
    label: "Phone",
    value: "+234 800 000 0000",
    meta: "Mon – Fri, 9:00 AM – 5:00 PM",
    href: "tel:+2348000000000",
    type: "phone",
  },
  {
    label: "Email",
    value: "hello@chapelofpraise.org",
    meta: "We respond within 24 hours.",
    href: "mailto:hello@chapelofpraise.org",
    type: "email",
  },
];

const serviceItems = [
  { day: "Sunday", title: "Sunday Worship", time: "8:00 AM & 10:30 AM" },
  { day: "Tuesday", title: "Midweek Bible Study", time: "6:00 PM" },
  { day: "Friday", title: "Miracle Service", time: "6:00 PM" },
  { day: "Office", title: "Pastoral & Admin Team", time: "Mon – Fri, 9:00 AM – 3:00 PM" },
];

const subjectOptions = [
  "General Enquiry",
  "Prayer Request",
  "New Member / First Visit",
  "Pastoral Support",
  "Event & Programme Info",
  "Partnership & Giving",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validateForm(values) {
  const nextErrors = {};

  if (!values.fullName.trim()) {
    nextErrors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!values.subject) {
    nextErrors.subject = "Please choose a subject.";
  }

  if (!values.message.trim()) {
    nextErrors.message = "Please write a short message.";
  } else if (values.message.trim().length < 10) {
    nextErrors.message = "Your message should be at least 10 characters long.";
  }

  return nextErrors;
}

export default function ContactUs() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialForm);
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="contact-kicker">Contact</p>
          <h1>We’d Love to Hear From You</h1>
          <p className="contact-hero-text">
            Whether you are visiting for the first time, seeking prayer support,
            or simply want to ask a question, we would be glad to connect with you.
          </p>
          <div className="contact-quick-links">
            <a href="#contact-info">Get in touch</a>
            <a href="#visit-us">Find us</a>
          </div>
        </div>

        <div className="contact-hero-panel">
          <div className="panel-stat">
            <span>20+</span>
            <small>Years of ministry</small>
          </div>
          <div className="panel-stat">
            <span>3</span>
            <small>Weekly gatherings</small>
          </div>
          <div className="panel-stat">
            <span>24h</span>
            <small>Response time</small>
          </div>
        </div>
      </section>

      <section className="contact-overview" id="contact-info">
        <div className="section-heading">
          <p className="contact-kicker">Reach Us</p>
          <h2>Start with the information you need most.</h2>
        </div>

        <div className="contact-list">
          {contactItems.map((item) => (
            <a key={item.label} href={item.href} className="contact-item" target={item.type === "map" ? "_blank" : undefined} rel={item.type === "map" ? "noreferrer" : undefined}>
              <div className="contact-label-row">
                <span className="contact-label">{item.label}</span>
                <span className="contact-badge">{item.type}</span>
              </div>
              <p className="contact-value">{item.value}</p>
              <span className="contact-meta">{item.meta}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-main" id="visit-us">
        <div className="contact-main-column info-column">
          <div className="section-heading compact">
            <p className="contact-kicker">Visit</p>
            <h2>Service times</h2>
          </div>

          <div className="schedule-list">
            {serviceItems.map((service) => (
              <div key={service.day} className="schedule-item">
                <div>
                  <h3>{service.day}</h3>
                  <p>{service.title}</p>
                </div>
                <span>{service.time}</span>
              </div>
            ))}
          </div>

          <div className="visit-panel">
            <p className="contact-kicker">Find us</p>
            <h3>Chapel of Praise</h3>
            <p>
              Pav 2, Akwa Ibom State University, Ikot Akpaden.<br />
              We welcome first-time visitors and long-time family members alike.
            </p>
            <a href="https://maps.google.com/?q=Pav+2+Akwa+Ibom+State+University+Ikot+Akpaden" target="_blank" rel="noreferrer">Get directions</a>
          </div>
        </div>

        <div className="contact-main-column form-column">
          <div className="section-heading compact">
            <p className="contact-kicker">Message us</p>
            <h2>Send a message</h2>
          </div>

          {submitted ? (
            <div className="success-panel" aria-live="polite">
              <div className="success-icon">✓</div>
              <h3>Message received</h3>
              <p>Thank you for reaching out. We’ll respond soon and are glad to hear from you.</p>
              <button
                type="button"
                className="submit-btn secondary"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                  >
                    <option value="">Select a topic</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.subject && <span className="field-error">{errors.subject}</span>}
                </div>
              </div>

              <div className="field-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <div className="form-footer">
                <span className="privacy-note">We’ll keep your message private and respectful.</span>
                <button type="submit" className="submit-btn">Send Message</button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="support-band">
        <div>
          <p className="contact-kicker">Prayer & Support</p>
          <h2>Need pastoral help or prayer?</h2>
        </div>
        <p>
          We are here for prayer requests, encouragement, and general pastoral care.
          Reach out and someone from the church family will be glad to help.
        </p>
      </section>
    </div>
  );
}
