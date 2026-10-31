import { useState } from "react";
// import emailjs from "@emailjs/browser";
import './Contact.css'

/* ------------------------------------------------------------
   CONTACT PAGE — redesigned to match the new hero and sermons
   pages (giant gradient word, cream background, navy cards,
   pill buttons).

   The form now sends a real email through EmailJS.
   Setup: see the EmailJS steps that came with this file. You
   need three values in a .env file at the project root:

     VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
     VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
     VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx

   (Create React App uses process.env.REACT_APP_... instead of
   import.meta.env.VITE_... — swap the three lines below.)
   Restart the dev server after editing .env.
   ------------------------------------------------------------ */

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Shown next to send errors so visitors always have another way to reach you
const CHURCH_EMAIL = "hello@chapelofpraise.org";

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

const stats = [
  { value: "20+", label: "Years of ministry" },
  { value: "3", label: "Weekly gatherings" },
  { value: "24h", label: "Response time" },
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
  website: "", // honeypot: real visitors never see or fill this
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

/* Small line icons for the three contact cards */
const ContactIcon = ({ type }) => {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    );
  }

  // map pin
  return (
    <svg {...common}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
};

export default function ContactUs() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSending) return; // ignore double clicks

    setSendError("");

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // Spam bots fill the hidden field. Pretend it worked, send nothing.
    if (formData.website) {
      setSubmitted(true);
      setFormData(initialForm);
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS keys are missing. Check your .env file and restart the dev server.");
      setSendError("The message service isn’t set up yet.");
      return;
    }

    setIsSending(true);

    try {
      // These names must match the {{variables}} in your EmailJS template
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName.trim(),
          from_email: formData.email.trim(),
          phone: formData.phone.trim() || "Not provided",
          subject: formData.subject,
          message: formData.message.trim(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSubmitted(true);
      setFormData(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendError("Sorry, your message could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  // The prayer band button jumps to the form with "Prayer Request" already chosen
  function startPrayerRequest() {
    setSubmitted(false);
    setSendError("");
    setFormData((prev) => ({ ...prev, subject: "Prayer Request" }));
    setErrors((prev) => ({ ...prev, subject: "" }));
  }

  return (
    <div className="cx-page">
      {/* ===== Hero ===== */}
      <section className="cx-hero">
        <div className="cx-hero-copy">
          <p className="cx-eyebrow">Contact</p>

          {/* One h1. Read aloud it is still "We’d Love to Hear From You". */}
          <h1 className="cx-title">
            <span className="cx-title-small">We’d love to</span>{" "}
            <span className="cx-title-giant">Hear</span>{" "}
            <span className="cx-title-tag">From You</span>
          </h1>

          <p className="cx-hero-text">
            Whether you are visiting for the first time, seeking prayer support,
            or simply want to ask a question, we would be glad to connect with you.
          </p>

          <div className="cx-hero-links">
            <a href="#contact-info" className="cx-btn cx-btn-primary">Get in touch</a>
            <a href="#visit-us" className="cx-btn cx-btn-outline">Find us</a>
          </div>
        </div>

        <ul className="cx-stats">
          {stats.map((stat) => (
            <li key={stat.label} className="cx-stat">
              <span className="cx-stat-value">{stat.value}</span>
              <span className="cx-stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== Contact cards ===== */}
      <section className="cx-reach" id="contact-info">
        <div className="cx-heading">
          <p className="cx-kicker">Reach Us</p>
          <h2>Start with the information you need most.</h2>
        </div>

        <div className="cx-card-grid">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="cx-card-link"
              target={item.type === "map" ? "_blank" : undefined}
              rel={item.type === "map" ? "noreferrer" : undefined}
            >
              <span className="cx-card-icon">
                <ContactIcon type={item.type} />
              </span>
              <span className="cx-card-label">{item.label}</span>
              <p className="cx-card-value">{item.value}</p>
              <span className="cx-card-meta">{item.meta}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== Service times + form ===== */}
      <section className="cx-main" id="visit-us">
        <div className="cx-visit">
          <div className="cx-heading compact">
            <p className="cx-kicker light">Visit</p>
            <h2>Service times</h2>
          </div>

          <div className="cx-schedule">
            {serviceItems.map((service) => (
              <div key={service.day} className="cx-schedule-item">
                <div>
                  <h3>{service.day}</h3>
                  <p>{service.title}</p>
                </div>
                <span>{service.time}</span>
              </div>
            ))}
          </div>

          <div className="cx-visit-panel">
            <p className="cx-kicker light">Find us</p>
            <h3>Chapel of Praise</h3>
            <p>
              Pav 2, Akwa Ibom State University, Ikot Akpaden.<br />
              We welcome first-time visitors and long-time family members alike.
            </p>
            <a
              href="https://maps.google.com/?q=Pav+2+Akwa+Ibom+State+University+Ikot+Akpaden"
              target="_blank"
              rel="noreferrer"
              className="cx-btn cx-btn-primary"
            >
              Get directions
            </a>
          </div>
        </div>

        <div className="cx-form-card" id="send-message">
          <div className="cx-heading compact">
            <p className="cx-kicker">Message us</p>
            <h2>Send a message</h2>
          </div>

          {submitted ? (
            <div className="cx-success" aria-live="polite">
              <div className="cx-success-icon">✓</div>
              <h3>Message received</h3>
              <p>Thank you for reaching out. We’ll respond soon and are glad to hear from you.</p>
              <button
                type="button"
                className="cx-btn cx-btn-outline"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="cx-form">
              <div className="cx-field-row">
                <div className="cx-field">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName && (
                    <span className="cx-error" id="fullName-error">{errors.fullName}</span>
                  )}
                </div>

                <div className="cx-field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span className="cx-error" id="email-error">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="cx-field-row">
                <div className="cx-field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="cx-field">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  >
                    <option value="">Select a topic</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.subject && (
                    <span className="cx-error" id="subject-error">{errors.subject}</span>
                  )}
                </div>
              </div>

              {/* Honeypot: hidden from people and screen readers, bots fill it in */}
              <div className="cx-honeypot" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="cx-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span className="cx-error" id="message-error">{errors.message}</span>
                )}
              </div>

              {sendError && (
                <div className="cx-alert" role="alert">
                  {sendError} You can also email us at{" "}
                  <a href={`mailto:${CHURCH_EMAIL}`}>{CHURCH_EMAIL}</a>.
                </div>
              )}

              <div className="cx-form-footer">
                <span className="cx-privacy">We’ll keep your message private and respectful.</span>
                <button type="submit" className="cx-btn cx-btn-primary" disabled={isSending}>
                  {isSending ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ===== Prayer & support band ===== */}
      <section className="cx-support">
        <div className="cx-support-copy">
          <p className="cx-kicker light">Prayer & Support</p>
          <h2>Need pastoral help or prayer?</h2>
          <p>
            We are here for prayer requests, encouragement, and general pastoral care.
            Reach out and someone from the church family will be glad to help.
          </p>
        </div>

        <a
          href="#send-message"
          className="cx-btn cx-btn-light"
          onClick={startPrayerRequest}
        >
          Send a prayer request
        </a>
      </section>
    </div>
  );
}