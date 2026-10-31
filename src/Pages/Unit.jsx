import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Unit.css';

/* ------------------------------------------------------------
   UNITS PAGE — redesigned to match the new hero, sermons and
   contact pages (giant gradient number, cream background, white
   cards, navy accents, pill buttons).

   Your unit data is unchanged. All class names start with "ux-".
   ------------------------------------------------------------ */

const units = [
  { id: 1, name: "Choir Unit", leader: "Israel Eminue", desc: "Leads worship and coordinates music ministry. Meets weekly to rehearse and worship together." },
  { id: 2, name: "Technical Unit", leader: "Marvellous Garuba", desc: "Support worship services, sound, lighting, and broadcasting for services and special events." },
  { id: 3, name: "Evangelism", leader: "God'spwer Jedidiah", desc: "Programs and discipleship for teens and young adults — events, small groups and mentorship." },
  { id: 4, name: "Ushering", leader: "Abese Emmanuel", desc: "Safe, creative ministry for kids with age-appropriate teaching and activities." },
  { id: 5, name: "Prayer Band", leader: "Olosunde Daniel", desc: "Intercessory prayer teams, emergency prayer support and prayer events." },
  { id: 6, name: "Sanctuary", leader: "Lawrence", desc: "Responsible for keepign the church environment serene and creating a hospitable church environment." },
  { id: 7, name: "Sunday school", leader: "Ifiok Udoma", desc: "Life groups, mentorship and courses to help people grow in faith." },
  { id: 8, name: "Media", leader: "Godson Etiuwem", desc: "Streaming, recording and creative media for services, events and social presence." },
  { id: 9, name: "Drama", leader: "Ubong Ekarika", desc: "Local and international mission initiatives focused on outreach and partnership." },
  { id: 10, name: "Decoration", leader: "Akpan Iyeneobong", desc: "Operations, scheduling, volunteer coordination and administrative support." },
  { id: 11, name: "Moderating", leader: "Israel", desc: "Partnerships with schools and family services to serve children in the neighbourhood." },
  { id: 12, name: "Information ", leader: "Finance Lead", desc: "Financial stewardship, training and responsible giving support." },
];

/* ---------- Helpers ---------- */

// "Marvellous Garuba" -> "MG"
const getInitials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

// 3 -> "03"
const padNumber = (n) => String(n).padStart(2, "0");

export default function Unit() {
  const [active, setActive] = useState(null);
  const [query, setQuery] = useState("");
  const closeBtnRef = useRef(null);

  // Close the popup with Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // While the popup is open: stop the page scrolling behind it and
  // move keyboard focus to the close button
  useEffect(() => {
    if (!active) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  const filtered = units.filter((u) =>
    `${u.name} ${u.leader} ${u.desc}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="ux-page">
      {/* ===== Hero ===== */}
      <section className="ux-hero">
        <p className="ux-eyebrow">Units</p>

        {/* One h1. Read aloud it is still
            "12 Ministries Driving Worship, Care & Fellowship". */}
        <h1 className="ux-title">
          <span className="ux-title-giant">{units.length}</span>{" "}
          <span className="ux-title-text">
            Ministries Driving Worship, Care &amp; Fellowship
          </span>
        </h1>

        <p className="ux-intro">
          Explore the church units that keep Chapel Of Praise growing strong — each
          designed to serve people, connect lives, and build spiritual momentum.
        </p>

        <input
          type="search"
          className="ux-search"
          placeholder="Search by unit or leader"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search units"
        />
      </section>

      {/* ===== Unit cards ===== */}
      <section className="ux-library" aria-label="Church units">
        {filtered.length > 0 ? (
          <div className="ux-grid">
            {filtered.map((u) => (
              /* The card is clickable with a mouse; keyboard users use the
                 "Learn more" button inside it, so there is no nested button. */
              <article
                className="ux-card"
                key={u.id}
                aria-labelledby={`unit-${u.id}`}
                onClick={() => setActive(u)}
              >
                <span className="ux-card-num" aria-hidden="true">{padNumber(u.id)}</span>

                <div className="ux-card-body">
                  <span className="ux-chip">Unit {padNumber(u.id)}</span>
                  <h3 id={`unit-${u.id}`} className="ux-card-title">{u.name.trim()}</h3>
                  <p className="ux-card-desc">{u.desc}</p>
                </div>

                <div className="ux-card-footer">
                  <div className="ux-lead">
                    <span className="ux-lead-avatar" aria-hidden="true">{getInitials(u.leader)}</span>
                    <span className="ux-lead-text">
                      <small>Led by</small>
                      <strong>{u.leader}</strong>
                    </span>
                  </div>

                  <button
                    type="button"
                    className="ux-btn ux-btn-outline ux-btn-small"
                    onClick={(e) => { e.stopPropagation(); setActive(u); }}
                    aria-haspopup="dialog"
                    aria-label={`Learn more about ${u.name.trim()}`}
                  >
                    Learn more
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="ux-empty">
            No units match that search. Try another word, or{" "}
            <Link to="/contact">contact us</Link> and we will point you to the right team.
          </p>
        )}
      </section>

      {/* ===== Join band ===== */}
      <section className="ux-join">
        <div className="ux-join-copy">
          <h2>Find your place to serve</h2>
          <p>
            Not sure which unit fits you? Tell us a little about yourself and we
            will help you find the right team.
          </p>
        </div>
        <Link to="/contact" className="ux-btn ux-btn-light">Talk to us</Link>
      </section>

      {/* ===== Unit popup ===== */}
      {active && (
        <div className="ux-overlay" onClick={() => setActive(null)}>
          <div
            className="ux-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${active.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className="ux-modal-close"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="ux-modal-top">
              <div className="ux-modal-avatar" aria-hidden="true">{getInitials(active.name)}</div>
              <div>
                <span className="ux-chip">Unit {padNumber(active.id)}</span>
                <h2 id={`modal-title-${active.id}`}>{active.name.trim()}</h2>
              </div>
            </div>

            <p className="ux-modal-leader">Led by <strong>{active.leader}</strong></p>
            <p className="ux-modal-desc">{active.desc}</p>

            <div className="ux-modal-actions">
              {/* Sends people to the contact page; change the destination if
                  you add a dedicated sign-up page later */}
              <Link to="/contact" className="ux-btn ux-btn-primary" onClick={() => setActive(null)}>
                Join this unit
              </Link>
              <button type="button" className="ux-btn ux-btn-outline" onClick={() => setActive(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}