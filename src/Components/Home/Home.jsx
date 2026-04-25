import React, { useEffect, useState } from "react";
import { searchDestinations } from "../../Services/api"; // ✅ fixed path
import "./home.css";
import video from "../../Assets/video.mp4";

import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { TfiFacebook } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor, FaList } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  // ✅ STATES
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(5000);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const rightIcons = [
  { id: 1, icon: <TfiFacebook />, link: "https://facebook.com" },
  { id: 2, icon: <AiOutlineInstagram />, link: "https://instagram.com" },
  { id: 3, icon: <FaTripadvisor />, link: "https://tripadvisor.com" },
];

const leftIcons = [
  { id: 1, icon: <FaList />, action: "list" },
  { id: 2, icon: <TbAppsFilled />, action: "grid" },
];

  // ✅ SEARCH FUNCTION
  const handleSearch = async () => {
    try {
      const response = await searchDestinations({
        destination,
        date,
        price,
      });
      console.log("Search results:", response.data);
      setResults(response.data);
      setSearched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 const handleIconClick = (action) => {
  if (action === "list") {
    console.log("Switch to list view");
  } else if (action === "grid") {
    console.log("Switch to grid view");
  }
};
  // ✅ AOS INIT
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>

      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        type="video/mp4"
      ></video>

      <div className="homeContent container">
        
        {/* TEXT */}
        <div className="textDev">
          <span data-aos="fade-right" className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">Search Your Holidays</h1>
        </div>

        {/* SEARCH CARD */}
        <div data-aos="fade-up" className="cardDiv grid">

          {/* DESTINATION */}
          <div data-aos="fade-right" className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="Input flex">
              <input
                type="text"
                placeholder="Enter your destination..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <GrLocation className="icon" />
            </div>
          </div>

          {/* DATE */}
          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="Input flex">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          {/* PRICE */}
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price</label>
              <h3 className="total">${price}</h3> {/* ✅ dynamic */}
            </div>

            <div className="Input flex">
              <input
                type="range"
                min="500"
                max="2000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))} // ✅ number fix
              />
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <div className="searchOptions flex" onClick={handleSearch}>
            <HiFilter className="icon" />
            <span>SEARCH</span>
          </div>

        </div>
        {/* RESULTS */}
 <div className="results container">
  {results && results.length > 0 ? (
    results.map((item, index) => (
      <div key={index} className="resultCard">
        <h2>{item.title}</h2>
        <h3>{item.location}</h3>
        <h1>{item.destination}</h1>
        <p><strong>Date:</strong> {item.date}</p>
        <p><strong>Price:</strong> ${item.price}</p>
        <p>{item.description}</p>
        {item.image && (
          <img src={item.image} alt={item.title} width="200" />
        )}
      </div>
    ))
  ) : (
    searched && <p>No results found</p>
  )}
</div>
        {/* FOOTER ICONS */}
        <div className="homeFooterIcons flex">

  {/* RIGHT ICONS */}
  <div className="rightIcons">
    {rightIcons.map((item) => (
      <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
        <span className="icon">{item.icon}</span>
      </a>
    ))}
  </div>

  {/* LEFT ICONS */}
  <div className="leftIcons">
    {leftIcons.map((item) => (
      <span
        key={item.id}
        className="icon"
        onClick={() => handleIconClick(item.action)}
      >
        {item.icon}
      </span>
    ))}
  </div>

</div>
      </div>
    </section>
  );
};

export default Home;