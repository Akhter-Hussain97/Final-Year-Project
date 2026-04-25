import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };*/
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server error!");
  }
};

  return (
    <section className="contact section">
      <div className="contactContainer">

        <h2 className="sectionTitle">Contact Us</h2>
        <p className="contactDesc">
          Have questions or need help planning your trip? Get in touch with us.
        </p>

        <div className="contactContent">

          {/* Contact Info */}
          <div className="contactInfo">
            <div className="infoBox">
              <FaPhoneAlt className="icon" />
              <span>+92 346 5095504</span>
            </div>

            <div className="infoBox">
              <FaEnvelope className="icon" />
              <span>travel@tour.com</span>
            </div>

            <div className="infoBox">
              <FaMapMarkerAlt className="icon" />
              <span>Sargodha, Pakistan</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="btn" type="submit">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;


