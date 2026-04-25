import React, {useState, useEffect} from "react";
import "./footer.css"; 
import API from "../../api";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import video1 from "../../Assets/video1.mp4";
import AOS from 'aos';
const socialLinks = [
  { id: 1, icon: <AiOutlineTwitter />, link: "https://twitter.com" },
  { id: 2, icon: <AiOutlineYoutube />, link: "https://youtube.com" },
  { id: 3, icon: <AiOutlineInstagram />, link: "https://instagram.com" },
  { id: 4, icon: <FaTripadvisor />, link: "https://tripadvisor.com" },
];
const messages = [
  "BEST TRAVEL WEBSITE THEME",
  "EXPLORE THE WORLD WITH US ✈️",
  "DISCOVER AMAZING DESTINATIONS 🌍",
  "TRAVEL SMART, TRAVEL SAFE",
];
const footerInfo = {
  title: "Travel",
  description:
    "Travel and tourism involve exploring new destinations for leisure, business, or cultural experiences. It is a major global industry that generates revenue and employment but faces challenges like infrastructure and security.",
};
const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  }, 3000); // change every 3 seconds

  return () => clearInterval(interval); // cleanup
}, []);
  useEffect(()=>{
            AOS.init({duration:2000},);
     },[]);
     const [email, setEmail] = useState("");

const handleSubmit = async () => {
  if (!email) {
    alert("Please enter email");
    return;
  }

  try {
    const res = await API.post("footer/subscribe/", {
      email: email,
    });

    console.log(res.data);
    alert(res.data.message);

    setEmail("");
  } catch (error) {
    console.error("API ERROR:", error);
    alert("Failed to subscribe");
  }
};
const navigate = useNavigate();
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted></video>
      </div>

      <div  data-aos="fade-up" className="secContent container">

        {/* Contact Section */}
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
        </div>

        {/* Email Input */}
         <div className="inputDiv flex">
    <input
      type="email"
      placeholder="Enter email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <button className="btn flex" onClick={handleSubmit}>
      SEND <FiSend className="icon" />
    </button>
  </div>
        {/* Footer Main Card */}
        <div className="footerCard flex">

        { /* {/* Intro Section */}
          <div className="footerIntro flex">
        <div className="logoDiv">
  <a href="/" className="logo flex">
    <MdOutlineTravelExplore className="icon" /> {footerInfo.title}
  </a>
</div>

<div data-aos="fade-left" className="footerParagraph">
  {footerInfo.description}
 <a
    href="https://www.lonelyplanet.com/articles"
    target="_blank"
    rel="noreferrer"
    style={{
      marginLeft: "6px",
      color: "Black",
      textDecoration: "none",
      cursor: "pointer",
      fontWeight: "500",
    }}
  >
    Read more
  </a>
</div>

<div className="footerSocial">
  {socialLinks.map((item) => (
    <a
      key={item.id}
      href={item.link}
      target="_blank"
      rel="noreferrer"
    >
      <span className="icon">{item.icon}</span>
    </a>
  ))}
</div>
</div> 
          {/* Footer Links Section */}
          <div data-aos="fade-up" className="footerLinks grid">

            {/* Group 1 */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <ul>
            <li
               className="footerList flex" onClick={() => navigate("/service")} style={{ cursor: "pointer" }}>
               <FaChevronRight className="icon" /> Services
               </li>
                <li
               className="footerList flex"
                onClick={() => navigate("/insurance")}
               style={{ cursor: "pointer" }} >
              <FaChevronRight className="icon" /> Insurance
              </li>
                <li
                className="footerList flex" onClick={() => navigate("/agency")} style={{ cursor: "pointer" }}>
                <FaChevronRight className="icon" /> Agency
                 </li>
                <li
                className="footerList flex" onClick={() => navigate("/tourism")} style={{ cursor: "pointer" }}>
                <FaChevronRight className="icon" /> Tourism
                 </li>
                <li
                 className="footerList flex" onClick={() => navigate("/payment")} style={{ cursor: "pointer" }}>
                <FaChevronRight className="icon" /> Payment
                 </li>
              </ul>
            </div>

            {/* Group 2 */}
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <ul>
                <li
                className="footerList flex" onClick={() => navigate("/booking")} style={{ cursor: "pointer" }}>
                <FaChevronRight className="icon" /> Booking
                 </li>
                <li
                 className="footerList flex" onClick={() => navigate("/rentcars")} style={{ cursor: "pointer" }}>
                <FaChevronRight className="icon" /> Rentcars
                 </li>
                <li
                 className="footerList flex" onClick={() => navigate("/hotelworld")} style={{ cursor: "pointer" }}>
                <FaChevronRight className="icon" /> HotelWorld
                 </li>
                <li
                 className="footerList flex" onClick={() => navigate("/trivago")} style={{ cursor: "pointer" }}>
                <FaChevronRight className="icon" /> Trivago
                 </li>
                <li
                 className="footerList flex" onClick={() => navigate("/tripadvisor")} style={{ cursor: "pointer" }}>
                <FaChevronRight className="icon" /> TripAdvisor
                 </li>
              </ul>
            </div>

            {/* Group 3 */}
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <ul>
                <li className="footerList flex"><FaChevronRight className="icon" /> London</li>
                <li className="footerList flex"><FaChevronRight className="icon" /> California</li>
                <li className="footerList flex"><FaChevronRight className="icon" /> Indonesia</li>
                <li className="footerList flex"><FaChevronRight className="icon" /> Europe</li>
                <li className="footerList flex"><FaChevronRight className="icon" /> Oceania</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright */}
       <div className="footerDiv flex">
  <small>{messages[currentIndex]}</small>

  <small>
    COPYRIGHTS RESERVED - SHIRANI BALTI {new Date().getFullYear()}
  </small>
</div>

      </div>
    </section>
  );
};

export default Footer;
