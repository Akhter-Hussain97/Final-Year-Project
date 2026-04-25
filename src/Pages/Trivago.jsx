import React, { useState } from "react";
import "./trivago.css";

const Trivago = () => {
  const [city, setCity] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");

  const hotels = [
    {
      id: 1,
      name: "Serena Hotel",
      city: "Islamabad",
      price: 180,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      name: "Pearl Continental",
      city: "Lahore",
      price: 150,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      id: 3,
      name: "Avari Towers",
      city: "Karachi",
      price: 130,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    {
      id: 4,
      name: "Hunza Resort",
      city: "Hunza",
      price: 90,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f1",
    },
    {
      id: 5,
      name: "Skardu Palace",
      city: "Skardu",
      price: 110,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    {
      id: 6,
      name: "Gilgit Mountain View",
      city: "Gilgit",
      price: 80,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    },
  ];

  // 🔥 FILTER LOGIC
  const filteredHotels = hotels.filter((hotel) => {
    const matchCity = hotel.city
      .toLowerCase()
      .includes(city.toLowerCase());

    let matchPrice = true;
    if (priceFilter === "Low") matchPrice = hotel.price < 100;
    if (priceFilter === "Medium")
      matchPrice = hotel.price >= 100 && hotel.price <= 150;
    if (priceFilter === "High") matchPrice = hotel.price > 150;

    return matchCity && matchPrice;
  });

  return (
    <section className="trivago-container">

      {/* HEADER */}
      <div className="trivago-header">
        <h1>Find Your Perfect Hotel</h1>
        <p>Compare and book hotels easily</p>
      </div>

      {/* FILTER BAR */}
      <div className="trivago-filters">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="trivago-input"
        />

        <select
          onChange={(e) => setPriceFilter(e.target.value)}
          className="trivago-select"
        >
          <option value="All">All Prices</option>
          <option value="Low">Under $100</option>
          <option value="Medium">$100 - $150</option>
          <option value="High">Above $150</option>
        </select>
      </div>

      {/* HOTEL GRID */}
      <div className="trivago-grid">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div key={hotel.id} className="trivago-card">

              <div className="trivago-image-box">
                <img src={hotel.image} alt={hotel.name} />
                <span className="trivago-rating">⭐ {hotel.rating}</span>
              </div>

              <div className="trivago-content">
                <h3>{hotel.name}</h3>
                <p className="trivago-city">{hotel.city}</p>

                <div className="trivago-footer">
                  <span className="trivago-price">${hotel.price}/night</span>

                  <button className="trivago-btn">
                    View Deal
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          <p className="trivago-empty">No hotels found</p>
        )}
      </div>

    </section>
  );
};

export default Trivago;