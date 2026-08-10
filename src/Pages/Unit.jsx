import React, { useState, useEffect } from "react";

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

export default function Unit() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="units-page">
      <div className="units-hero">
        <div className="units-header">
          <div className="section-tag">UNITS</div>
          <h1>12 Ministries Driving Worship, Care & Fellowship</h1>
          <p className="units-intro">
            Explore the church units that keep Chapel Of Praise growing strong — each designed to serve people, connect lives, and build spiritual momentum.
          </p>
        </div>
        {/* <div className="units-banner">
          <div className="units-badge">12 Units</div>
          <p>From prayer to media, every team is built for impact and designed to help you belong.</p>
        </div> */}
      </div>

      <main className="unit-grid">
        {units.map((u) => (
          <article
            className="unit-card"
            key={u.id}
            aria-labelledby={`unit-${u.id}`}
            onClick={() => setActive(u)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setActive(u); }}
          >
            <div className="unit-card-top">
              {/* <div className="unit-avatar">{u.name.split(" ").map((word) => word[0]).slice(0, 2).join("")}</div> */}
              <span className="unit-chip">UNIT {u.id}</span>
            </div>

            <div className="unit-card-body">
              <h3 id={`unit-${u.id}`} className="unit-title">{u.name}</h3>
              <p className="unit-desc">{u.desc}</p>
            </div>

            <div className="unit-card-footer">
              <span className="unit-leader">Lead: <strong>{u.leader}</strong></span>
              <button
                type="button"
                className="primary-btn"
                onClick={(e) => { e.stopPropagation(); setActive(u); }}
                aria-haspopup="dialog"
              >
                Learn More
              </button>
            </div>
          </article>
        ))}
      </main>

      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${active.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">×</button>
            <div className="modal-content">
              <div className="modal-avatar">{active.name.split(" ").map((word) => word[0]).slice(0, 2).join("")}</div>
              <div>
                <h2 id={`modal-title-${active.id}`}>{active.name}</h2>
                <p className="modal-leader">Lead: <strong>{active.leader}</strong></p>
                <p className="modal-desc">{active.desc}</p>
              </div>
            </div>
            <div className="modal-actions">
              <button className="primary-btn" onClick={() => { /* future: join action */ }}>Join this unit</button>
              <button className="secondary-btn" onClick={() => setActive(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
