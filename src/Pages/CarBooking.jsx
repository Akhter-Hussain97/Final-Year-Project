import React from "react";
import { useLocation } from "react-router-dom";

const CarBooking = () => {
  const { state } = useLocation();
  const car = state?.car;

  if (!car) return <h2>No car selected</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Car Booking</h1>
      <h2>{car.name}</h2>
      <p>Location: {car.location}</p>
      <p>Price: ${car.price}</p>
      <img
        src={car.image}
        alt={car.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />
    </div>
  );
};

export default CarBooking;