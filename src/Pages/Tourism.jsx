import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tourism.css";
  const fallbackData = [
  {
    id: 1,
    location: "Hunza Valley, Pakistan",
    price: 520,
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
    rating: 4.8,
    reviews: 120,
  },
  {
    id: 2,
    location: "Skardu, Pakistan",
    price: 610,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    location: "Swat Valley, Pakistan",
    price: 420,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    rating: 4.5,
    reviews: 87,
  },
  {
    id: 4,
    location: "Dubai, UAE",
    price: 900,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    rating: 4.9,
    reviews: 300,
  },
  {
    id: 5,
    location: "Istanbul, Turkey",
    price: 750,
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee",
    rating: 4.6,
    reviews: 210,
  },
  {
    id: 6,
    location: "Paris, France",
    price: 1100,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    rating: 4.8,
    reviews: 500,
  },
];
const Tourism = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH DATA
  useEffect(() => {
    setData(fallbackData);
    setLoading(false);
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <section className="tourism container section">

      <h1 className="tourismTitle">Explore Destinations</h1>
    <div className="tourismGrid">
  {data.map((item) => (
    <div key={item.id} className="tourismCard">

      <div className="imageWrapper">
        <img
          src={
            item.image?.startsWith("http")
              ? item.image
              : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          }
          alt={item.location}
        />

        <span className="priceTag">${item.price || "N/A"}</span>

        <div className="rating">
          ⭐ {item.rating || 4.5}
        </div>
      </div>

      <div className="cardContent">
        <h3>{item.location || "Unknown"}</h3>

        <button
          className="exploreBtn"
          onClick={() =>
            navigate("/package-details", {
              state: { package: item },
            })
          }
        >
          Explore Details
        </button>
      </div>

    </div>
  ))}
</div>
    </section>
  );
};
export default Tourism;