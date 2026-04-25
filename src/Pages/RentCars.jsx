import React, { useState } from "react";
import "./rentcars.css";
import { useNavigate } from "react-router-dom";

const RentCars = () => {
    const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // 🔥 Demo data (later you can fetch from API)
 const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    location: "Lahore",
    price: 50,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    type: "Sedan",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Honda Civic",
    location: "Islamabad",
    price: 65,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    type: "Sedan",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Toyota Prado",
    location: "Gilgit",
    price: 120,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    type: "SUV",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Suzuki Alto",
    location: "Karachi",
    price: 30,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    type: "Economy",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Kia Sportage",
    location: "Islamabad",
    price: 90,
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea",
    type: "SUV",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Hyundai Tucson",
    location: "Lahore",
    price: 95,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
    type: "SUV",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Suzuki Cultus",
    location: "Faisalabad",
    price: 35,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
    type: "Economy",
    rating: 4.1,
  },
  {
    id: 8,
    name: "Honda BR-V",
    location: "Multan",
    price: 70,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588",
    type: "SUV",
    rating: 4.4,
  },
  {
    id: 9,
    name: "Toyota Fortuner",
    location: "Skardu",
    price: 150,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    type: "Luxury SUV",
    rating: 4.9,
  },
  {
    id: 10,
    name: "BMW 5 Series",
    location: "Islamabad",
    price: 200,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    type: "Luxury",
    rating: 5.0,
  },
];

  // 🔍 Filter
  const filteredCars = cars.filter((car) =>
    car.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <section className="rentcars container section">

  {/* HEADER */}
  <div className="rentHeader">
    <h1>Rent a Car</h1>
    <p>Find the best cars for your journey</p>
  </div>

  {/* SEARCH */}
  <div className="rentSearch">
    <input
      type="text"
      placeholder="Search by city (e.g. Lahore)"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {/* ✅ CORRECT GRID */}
  <div className="rentGrid">
    {filteredCars.map((car) => (
      <div key={car.id} className="rentCard">

        <div className="imageWrapper">
          <img src={car.image} alt={car.name} />
          <span className="badge">{car.type}</span>
        </div>

        <div className="rentInfo">
          <h3>{car.name}</h3>
          <p className="location">{car.location}</p>

          <div className="rentMeta">
            <span>⭐ {car.rating}</span>
            <span className="price">${car.price}/day</span>
          </div>

          <button className="btnm"
            onClick={() =>
              navigate("/car-booking", {
                state: {
                  car: {
                    id: car.id,
                    name: car.name,
                    price: car.price,
                    location: car.location,
                    image: car.image,
                  },
                },
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

export default RentCars;