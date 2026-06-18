import React from "react";
import TikTokIcon from "./TikTokIcon";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">

      {/* ── Top strip: scripture quote ── */}
      <div className="footer-quote" role="region" aria-label="Scripture reflection">
        <p>"Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name."</p>
        <span>— Psalm 100:4</span>
      </div>

      {/* ── Main grid ── */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand" role="region" aria-label="Chapel Of Praise information">
          <div className="footer-logo">
            <img src="/imgs/chapel logo.png" alt="Chapel Of Praise" />
            <h3>Chapel Of Praise</h3>
          </div>
          <p className="footer-about">
            A place of worship, belonging, and transformation rooted in faith, service, and community. No matter where
            you are on your spiritual journey, you are always welcome here.
          </p>
          <div className="footer-socials" role="region" aria-label="Follow us on social media">
            <span className="socials-label">Follow Us:</span>
            {/* Facebook */}
            <a href="https://facebook.com/chapelofpraise" className="social-btn" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/chapelofpraise" className="social-btn" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://tiktok.com/@chapelofpraise" className="social-btn" aria-label="Follow us on TikTok" target="_blank" rel="noopener noreferrer">
              <TikTokIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="footer-col" aria-label="Main navigation">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/units">Ministries & Units</a></li>
            <li><a href="/sermons">Sermons & Teaching</a></li>
            <li><a href="/events">Events & Gatherings</a></li>
            <li><a href="/gallery">Photo Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>

        {/* Service Times */}
        <div className="footer-col" role="region" aria-label="Service times and schedule">
          <h4 className="footer-col-title">Service Times</h4>
          <div className="service-block">
            <p className="service-day">Sunday Worship</p>
            <p className="service-time">8:00 AM & 10:30 AM</p>
            <p className="service-location">Main Auditorium</p>
          </div>
          <div className="service-block">
            <p className="service-day">Tuesday Bible Study</p>
            <p className="service-time">6:00 PM</p>
            <p className="service-location">Chapel Hall</p>
          </div>
          <div className="service-block">
            <p className="service-day">Friday Miracle Service</p>
            <p className="service-time">6:00 PM</p>
            <p className="service-location">Main Auditorium</p>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col" role="region" aria-label="Contact information">
          <h4 className="footer-col-title">Get in Touch</h4>
          <ul className="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Pav 2, Akwa Ibom State University<br />Akwa Ibom, Nigeria</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6.14 6.14l.95-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+234801234567">+234 801 234 5678</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:hello@chapelofpraise.org">hello@chapelofpraise.org</a>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <p className="footer-col-title" style={{ marginTop: "24px" }}>Stay Connected</p>
            <p className="newsletter-sub">Get weekly devotionals &amp; ministry updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" aria-label="Email address for newsletter subscription" />
              <button type="button" aria-label="Subscribe to our newsletter">Subscribe</button>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Chapel Of Praise. All rights reserved.
        </p>
        <nav className="footer-bottom-links" aria-label="Footer links">
          <a href="/privacy">Privacy Policy</a>
          <span className="footer-divider" aria-hidden="true" />
          <a href="/terms">Terms of Use</a>
          <span className="footer-divider" aria-hidden="true" />
          <a href="/sitemap">Sitemap</a>
        </nav>
      </div>

    </footer>
  );
};

export default Footer;