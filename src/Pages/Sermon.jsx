import React, { useMemo, useState } from "react";
import './Sermon.css';

const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/5rE7okWaDr8jMfDxqedyhX?si=6eeb46d140c14683";


const sermons = [
  {
    id: 1,
    title: "ACADEMIC SUMMIT PART 2",
    preacher: "Engr. Udeme Linus",
    date: "2026-9-6",
    description: "In this sermon, we are taught how to achieve academic excellence and success.",
    spotifyUrl: "https://open.spotify.com/episode/2G0StDDWyTxfXa1oaWiWIH?si=-Ehukd-zQ0yYFX6gtEge1w",
  },
  {
    id: 2,
    title: "ACADEMIC SUMMIT PART 1",
    preacher: "Engr. Udeme Linus",
    date: "2026-09-06",
    description: "In this sermon, we are taught tips and methods on how to excel academically.",
    spotifyUrl: "https://open.spotify.com/episode/3l2H86wgMqrmHKOYIOoXIh?si=_I7kPUc3QV2euIrWb1GzCw",
  },
  {
    id: 3,
    title: "WAITING ON THE LORD",
    preacher: "Bro. Samuel Udofia",
    date: "2026-08-10",
    description: "In this sermon, we are taught how do wait diligemtly upon the lord.",
    spotifyUrl: "https://open.spotify.com/episode/36stp79wG93OOJxdaLFdqZ?si=GUZbByACR6CrU_ObdtAFnA",
  },
  {
    id: 4,
    title: "MERCY PREVAILS OVER JUDGEMENT",
    preacher: "Bro. Olosunde Daniel",
    date: "2026-07-26",
    description: "In this sermon, we are taught about the mercy of God and how it prevails over judgment.",
    spotifyUrl: "https://open.spotify.com/episode/0ARzvjQ7ECbXZNYyyvypok?si=avEjMDEeQnudh1SX_hGzSw",
  },
  {
    id: 5,
    title: "REGENERATION BY FIRE",
    preacher: "Bro. Ifiok Udoma",
    date: "2026-07-17",
    description: "In this sermon, we are taught about the process of regeneration through the refining fire of the Holy Spirit.",
    spotifyUrl: "https://open.spotify.com/episode/4Jo7hrSKakRwdDZNk1yS8o?si=ZPaj1Hz8TwiEhXzD4Wmk2w",
  },
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

// Turns an episode link into the link Spotify's embedded player needs.
// Returns null when the link is not an episode link (no player is shown).
const toEmbedUrl = (url) =>
  url && url.includes("open.spotify.com/episode/")
    ? url.replace("open.spotify.com/", "open.spotify.com/embed/")
    : null;

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="sermon-spotify-icon">
    <path
      fill="currentColor"
      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-.99-.12-1.14-.6-.12-.48.12-.99.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z"
    />
  </svg>
);

/* ---------- One sermon card ---------- */

const SermonCard = ({ sermon }) => (
  <article className="sermon-card">
    <div className="sermon-card-top">
      <span className="sermon-chip">{sermon.series}</span>
      <time className="sermon-date" dateTime={sermon.date}>
        {formatDate(sermon.date)}
      </time>
    </div>

    <div className="sermon-card-body">
      <h3 className="sermon-card-title">{sermon.title}</h3>
      <p className="sermon-card-preacher">{sermon.preacher}</p>
      <p className="sermon-card-desc">{sermon.description}</p>
    </div>

    <a
      className="sermon-btn sermon-btn-spotify"
      href={sermon.spotifyUrl || SPOTIFY_SHOW_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Listen to ${sermon.title} on Spotify (opens in a new tab)`}
    >
      <SpotifyIcon />
      Listen on Spotify
    </a>
  </article>
);



const Sermons = () => {
  const [query, setQuery] = useState("");
  const [activeSeries, setActiveSeries] = useState("All");

  // Newest sermon first
  const sorted = useMemo(
    () => [...sermons].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  // Series chips are built from the sermons themselves
  const seriesList = useMemo(
    () => ["All", ...new Set(rest.map((s) => s.series))],
    [rest]
  );

  const filtered = rest.filter((s) => {
    const matchesSeries = activeSeries === "All" || s.series === activeSeries;
    const text = `${s.title} ${s.preacher} ${s.series}`.toLowerCase();
    return matchesSeries && text.includes(query.trim().toLowerCase());
  });

  const featuredEmbed = featured ? toEmbedUrl(featured.spotifyUrl) : null;

  return (
    <main className="sermons-page">
      {/* ===== Page hero ===== */}
      <section className="sermons-hero">
        <p className="sermons-kicker">Messages that build your faith</p>
        <h1 className="sermons-title">Sermons</h1>
        <p className="sermons-intro">
          Missed a service, or want to hear a message again? Every sermon is on
          Spotify, so you can listen at home, on the road or on campus.
        </p>

        <div className="sermons-actions">
          <a
            className="sermon-btn sermon-btn-spotify"
            href={SPOTIFY_SHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpotifyIcon />
            Listen on Spotify
          </a>
          <a href="#all-sermons" className="sermon-btn sermon-btn-outline">
            Browse sermons
          </a>
        </div>
      </section>

      {/* ===== Latest sermon ===== */}
      {featured && (
        <section className="sermon-featured" aria-labelledby="latest-heading">
          <div className="sermon-featured-inner">
            <div className="sermon-featured-info">
              <span className="sermon-flag">Latest message</span>
              <h2 id="latest-heading" className="sermon-featured-title">
                {featured.title}
              </h2>
              <p className="sermon-featured-meta">
                {featured.preacher} · {formatDate(featured.date)} ·{" "}
                {featured.series}
              </p>
              <p className="sermon-featured-desc">{featured.description}</p>

              <a
                className="sermon-btn sermon-btn-spotify"
                href={featured.spotifyUrl || SPOTIFY_SHOW_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpotifyIcon />
                Open in Spotify
              </a>
            </div>

            <div className="sermon-featured-player">
              {featuredEmbed ? (
                <iframe
                  title={`Spotify player: ${featured.title}`}
                  src={featuredEmbed}
                  width="100%"
                  height="232"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              ) : (
                <a
                  className="sermon-player-fallback"
                  href={featured.spotifyUrl || SPOTIFY_SHOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SpotifyIcon />
                  <span>Tap to listen on Spotify</span>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section id="all-sermons" className="sermon-library">
          <div className="sermon-library-head">
            <h2 className="sermon-library-title">More messages</h2>

            <input
              type="search"
              className="sermon-search"
              placeholder="Search by title, preacher or series"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search sermons"
            />
          </div>

          <div className="sermon-filters" role="group" aria-label="Filter by series">
            {seriesList.map((series) => (
              <button
                key={series}
                type="button"
                className={`sermon-filter ${activeSeries === series ? "active" : ""}`}
                onClick={() => setActiveSeries(series)}
                aria-pressed={activeSeries === series}
              >
                {series}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="sermon-grid">
              {filtered.map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} />
              ))}
            </div>
          ) : (
            <p className="sermon-empty">
              No sermons match that search. Try another word, or browse
              everything on{" "}
              <a href={SPOTIFY_SHOW_URL} target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
              .
            </p>
          )}
        </section>
      )}

      <section className="sermon-follow">
        <div className="sermon-follow-copy">
          <h2 className="sermon-follow-title">Never miss a message</h2>
          <p>
            Follow us on Spotify and new sermons will show up in your library
            as soon as they are uploaded.
          </p>
        </div>

        <a
          className="sermon-btn sermon-btn-spotify"
          href={SPOTIFY_SHOW_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SpotifyIcon />
          Follow on Spotify
        </a>
      </section>
    </main>
  );
};

export default Sermons;