import React from "react";
import "./About.css";

const About = () => {
  const stats = [
    { id: 1, number: "10K+", label: "Happy Travelers" },
    { id: 2, number: "500+", label: "Destinations" },
    { id: 3, number: "120+", label: "Tour Guides" },
    { id: 4, number: "5 Years", label: "Experience" },
  ];

  const team = [
    {
      id: 1,
      name: "Akhter Hussain",
      role: "Founder & CEO",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      role: "Travel Expert",
    },
    {
      id: 3,
      name: "Usman Tariq",
      role: "Tour Manager",
    },
  ];

  return (
    <section className="about-container">

      {/* HERO */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          We create unforgettable travel experiences across the world.
        </p>
      </div>

      {/* STORY */}
      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Our travel platform is designed to help people explore the world easily.
          From booking hotels to discovering destinations, we provide everything
          in one place. Our mission is to make travel simple, affordable, and enjoyable.
        </p>
      </div>

      {/* STATS */}
      <div className="about-stats">
        {stats.map((item) => (
          <div key={item.id} className="stat-card">
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* TEAM */}
      <div className="about-section">
        <h2>Meet Our Team</h2>

        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
