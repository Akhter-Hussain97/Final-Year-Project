import React from "react";
import "./agency.css";

const Agency = () => {
  const team = [
    {
      id: 1,
      name: "Travel Experts",
      role: "Trip Planning Specialists",
      desc: "We design complete travel experiences for individuals and groups.",
    },
    {
      id: 2,
      name: "Customer Support",
      role: "24/7 Assistance Team",
      desc: "Always available to help you before, during, and after your trip.",
    },
    {
      id: 3,
      name: "Local Guides",
      role: "Professional Tour Guides",
      desc: "Experienced guides ensuring safe and informative travel.",
    },
  ];

  return (
    <section className="agency container section">
      
      <div className="agencyHeader">
        <h1>Our Agency</h1>
        <p>Your trusted travel partner for unforgettable journeys</p>
      </div>

      <div className="agencyGrid">
        {team.map((item) => (
          <div key={item.id} className="agencyCard">
            <h3>{item.name}</h3>
            <h4>{item.role}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Agency;