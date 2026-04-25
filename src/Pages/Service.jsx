import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlane,
  FaHotel,
  FaPassport,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "./Service.css";

const Service = () => {
  const navigate = useNavigate();

  // ✅ Dynamic Data (future API ready)
  const services = [
    {
      id: 1,
      title: "Tour Packages",
      desc: "Explore top destinations with affordable travel packages.",
      icon: <FaMapMarkedAlt />,
      route: "/packages",
      tag: "Travel",
    },
    {
      id: 2,
      title: "Flight Booking",
      desc: "Book domestic and international flights at best prices.",
      icon: <FaPlane />,
      route: "/flights",
      tag: "Booking",
    },
    {
      id: 3,
      title: "Hotel Booking",
      desc: "Find and reserve comfortable hotels worldwide.",
      icon: <FaHotel />,
      route: "/hotels",
      tag: "Stay",
    },
    {
      id: 4,
      title: "Visa Assistance",
      desc: "Get help with visa processing and documentation.",
      icon: <FaPassport />,
      route: "/visa",
      tag: "Support",
    },
    {
      id: 5,
      title: "Travel Insurance",
      desc: "Secure your journey with reliable insurance plans.",
      icon: <FaShieldAlt />,
      route: "/insurance",
      tag: "Safety",
    },
  ];

  return (
    <section className="services container section">
      
      {/* HEADER */}
      <div className="serviceHeader">
        <h1>Our Services</h1>
        <p>Everything you need for your perfect travel experience</p>
      </div>

      {/* GRID */}
      <div className="serviceGrid">
        {services.map((item) => (
          <div key={item.id} className="serviceCard">

            {/* ICON */}
            <div className="serviceIcon">{item.icon}</div>

            {/* TAG */}
            <span className="tag">{item.tag}</span>

            {/* TITLE */}
            <h3>{item.title}</h3>

            {/* DESCRIPTION */}
            <p>{item.desc}</p>

            {/* BUTTON */}
            <button
              className="serviceBtn"
              onClick={() => navigate(item.route)}
            >
              Explore
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;