import React, { useState } from "react";
import "./hotelworld.css";
import { useNavigate } from "react-router-dom";

const HotelWorld = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // 🔥 Demo Data (later connect API)
  const hostels = [
  {
    id: 1,
    name: "Mountain View Hostel",
    location: "Hunza",
    price: 25,
    rating: 4.6,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb21072",
  },
  {
    id: 2,
    name: "City Backpackers",
    location: "Islamabad",
    price: 20,
    rating: 4.4,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 3,
    name: "Beach Hostel",
    location: "Karachi",
    price: 18,
    rating: 4.2,
    reviews: 80,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 4,
    name: "Skardu Adventure Stay",
    location: "Skardu",
    price: 30,
    rating: 4.8,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 5,
    name: "Lahore Heritage Hostel",
    location: "Lahore",
    price: 22,
    rating: 4.3,
    reviews: 70,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },
  {
    id: 6,
    name: "Northern Lights Lodge",
    location: "Gilgit",
    price: 28,
    rating: 4.7,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    id: 7,
    name: "Desert Camp Hostel",
    location: "Bahawalpur",
    price: 15,
    rating: 4.1,
    reviews: 50,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
  },
  {
    id: 8,
    name: "Multan Comfort Stay",
    location: "Multan",
    price: 19,
    rating: 4.0,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    id: 9,
    name: "Luxury Hills Hostel",
    location: "Murree",
    price: 35,
    rating: 4.9,
    reviews: 200,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 10,
    name: "Budget Travelers Inn",
    location: "Peshawar",
    price: 17,
    rating: 4.2,
    reviews: 60,
    image: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267",
  },
];
  // 🔍 Filter
  const filtered = hostels.filter((h) =>
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="hostel container section">

      {/* HEADER */}
      <div className="hostelHeader">
        <h1>Find Your Hostel</h1>
        <p>Affordable stays for every traveler</p>
      </div>

      {/* SEARCH */}
      <div className="hostelSearch">
        <input
          type="text"
          placeholder="Search by city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="hostelGrid">
        {filtered.map((item) => (
          <div key={item.id} className="hostelCard">

            <div className="imageWrapper">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="hostelInfo">
              <h3>{item.name}</h3>
              <p className="location">{item.location}</p>

              <div className="meta">
                <span>⭐ {item.rating}</span>
                <span className="price">${item.price}/night</span>
              </div>

              <button className="bttn"
                onClick={() =>
                  navigate("/booking", {
                    state: { hostel: item },
                  })
                }
              >
                Book Now
              </button>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HotelWorld;