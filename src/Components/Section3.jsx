import React from "react";

const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "8:00 AM & 10:30 AM",
    location: "Main Auditorium",
    description: "Join us for inspiring worship, prayer, and teaching that strengthens your faith.",
    category: "Worship",
  },
  {
    id: 2,
    title: "Midweek Bible Study",
    date: "Every Tuesday",
    time: "6:00 PM",
    location: "Chapel Hall",
    description: "Interactive Bible study where we dive deep into Scripture and discuss how to apply God's Word to daily life.",
    category: "Study",
  },
  {
    id: 3,
    title: "Friday Miracle Service",
    date: "Every Friday",
    time: "6:00 PM",
    location: "Main Auditorium",
    description: "Experience supernatural encounters through prayer, worship, and God's presence. Testimonies, healing, and transformation.",
    category: "Prayer",
  },
  {
    id: 4,
    title: "Youth Fellowship Night",
    date: "3rd Saturday of each month",
    time: "7:00 PM",
    location: "Fellowship Hall",
    description: "Games, worship, teaching, and meaningful conversations designed for teens and young adults.",
    category: "Fellowship",
  },
  {
    id: 5,
    title: "Prayer Vigil",
    date: "1st Friday of each month",
    time: "10:00 PM - 6:00 AM",
    location: "Prayer Room",
    description: "Join our prayer team for overnight intercession, worship, and encounter with God's presence.",
    category: "Prayer",
  },
  {
    id: 6,
    title: "Community Outreach",
    date: "2nd Saturday of each month",
    time: "9:00 AM",
    location: "Campus & Community",
    description: "Serve alongside the Chapel family as we reach out to the campus and broader community with love and care.",
    category: "Service",
  },
];

const Section3 = () => {
  return (
    <section className="section3-container" aria-labelledby="events-heading">
      <div className="section1-content">
        <div className="imgs">
          <img className="img1" src="/imgs/worship1.jpg" alt="Community gathering and fellowship at Chapel Of Praise" />
          <img className="img2" src="/imgs/praise2.jpg" alt="Prayer and worship time during special event" />
        </div>
        <div className="text">
          <h2 id="events-heading">A Place to Encounter God</h2>
          <p className="p1">
            Every gathering is designed to help you meet God, be encouraged in
            your walk, and connect with others who share your faith.
          </p>
          <p className="p2">
            From worship to teaching, we seek to create meaningful moments that
            strengthen your relationship with Christ and inspire spiritual growth.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="events-section" role="region" aria-label="Upcoming events at Chapel Of Praise">
        <div className="events-header">
          <h3>Upcoming Events & Gatherings</h3>
          <p className="events-subtitle">Weekly services and special events designed for spiritual growth and community connection.</p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-category">
                <span className="category-badge">{event.category}</span>
              </div>
              
              <div className="event-content">
                <h4 className="event-title">{event.title}</h4>
                
                <div className="event-details">
                  <div className="detail-row">
                    <span className="detail-label">When:</span>
                    <span className="detail-value">{event.date}, {event.time}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Where:</span>
                    <span className="detail-value">{event.location}</span>
                  </div>
                </div>
                
                <p className="event-description">{event.description}</p>
              </div>

              <button className="event-btn" aria-label={`Learn more about ${event.title}`}>Learn More</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
