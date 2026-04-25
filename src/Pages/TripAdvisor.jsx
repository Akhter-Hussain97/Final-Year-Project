import React from "react";
import "./tripadvisor.css";

const TripAdvisor = () => {
  const places = [
    {
      id: 1,
      name: "Hunza Valley",
      location: "Gilgit-Baltistan",
      rating: 4.9,
      reviews: 1245,
      image:
        "https://images.unsplash.com/photo-1609948543911-7e8d2b4d1c7b",
      description: "Snow mountains, peaceful lakes, and breathtaking views.",
    },
    {
      id: 2,
      name: "Skardu",
      location: "Baltistan",
      rating: 4.8,
      reviews: 980,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      description: "Gateway to K2 with stunning landscapes and lakes.",
    },
    {
      id: 3,
      name: "Fairy Meadows",
      location: "Nanga Parbat",
      rating: 4.9,
      reviews: 1500,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      description: "World’s most beautiful camping spot.",
    },
    {
      id: 4,
      name: "Lahore Fort",
      location: "Lahore",
      rating: 4.6,
      reviews: 800,
      image:
        "https://images.unsplash.com/photo-1589395937772-f6702c7fdfb1",
      description: "Historic Mughal architecture and heritage site.",
    },
    {
      id: 5,
      name: "Murree Hills",
      location: "Punjab",
      rating: 4.5,
      reviews: 650,
      image:
        "https://images.unsplash.com/photo-1549887534-4b5b6d1b8a5d",
      description: "Cool weather, pine trees, and scenic views.",
    },
  ];

  return (
    <section className="ta-container">

      {/* HEADER */}
      <div className="ta-header">
        <h1>Top Rated Destinations</h1>
        <p>Real experiences from travelers around the world</p>
      </div>

      {/* GRID */}
      <div className="ta-grid">
        {places.map((place) => (
          <div key={place.id} className="ta-card">

            {/* IMAGE */}
            <div className="ta-image">
              <img src={place.image} alt={place.name} />
            </div>

            {/* CONTENT */}
            <div className="ta-content">
              <h3>{place.name}</h3>
              <p className="ta-location">{place.location}</p>
              <p className="ta-desc">{place.description}</p>

              {/* RATING */}
              <div className="ta-rating">
                ⭐ {place.rating} <span>({place.reviews} reviews)</span>
              </div>

              <button className="ta-btn">
                View Details
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default TripAdvisor;