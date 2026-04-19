import React from "react";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ── Top strip: scripture quote ── */}
      <div className="footer-quote">
        <p>"Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name."</p>
        <span>— Psalm 100:4</span>
      </div>

      {/* ── Main grid ── */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="src/assets/chapel logo.png" alt="Chapel Of Praise Logo" />
            <h3>Chapel Of Praise</h3>
          </div>
          <p className="footer-about">
            A place of worship, belonging, and transformation. No matter where
            you are on your journey, you are always welcome here.
          </p>
          <div className="footer-socials">
            {/* Facebook */}
            <a href="#" className="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="social-btn" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.87 23 12 23 12s0-3.87-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a1a2e" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="social-btn" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Units</a></li>
            <li><a href="#">Sermons</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Give Online</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Service Times */}
        <div className="footer-col">
          <h4 className="footer-col-title">Service Times</h4>
          <div className="service-block">
            <p className="service-day">Sunday Services</p>
            <p className="service-time">First Service — 8:00 AM</p>
            <p className="service-time">Second Service — 10:00 AM</p>
          </div>
          <div className="service-block">
            <p className="service-day">Tuesday</p>
            <p className="service-time">Bible Study &amp; Prayer — 6:00 PM</p>
          </div>
          <div className="service-block">
            <p className="service-day">Friday Service</p>
            <p className="service-time">Friday Service — 6:00 PM</p>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Pav 2,<br />Akwa Ibom state University</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6.14 6.14l.95-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+234 801 234 5678</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>hello@chapelofpraise.org</span>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <p className="footer-col-title" style={{ marginTop: "24px" }}>Stay Connected</p>
            <p className="newsletter-sub">Get weekly devotionals &amp; updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Chapel Of Praise. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span className="footer-divider" />
          <a href="#">Terms of Use</a>
          <span className="footer-divider" />
          <a href="#">Sitemap</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;