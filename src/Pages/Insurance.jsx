import React from "react";
import { useNavigate } from "react-router-dom";
import "./Insurance.css";

const Insurance = () => {
  const navigate = useNavigate();

  // ✅ Dynamic Data (later replace with API)
  const plans = [
    {
      id: 1,
      title: "Basic Plan",
      price: "$50",
      duration: "7 Days",
      features: ["Medical Coverage", "Trip Cancellation"],
    },
    {
      id: 2,
      title: "Premium Plan",
      price: "$120",
      duration: "15 Days",
      features: ["Medical + Baggage", "Flight Delay", "Full Support"],
    },
    {
      id: 3,
      title: "Family Plan",
      price: "$200",
      duration: "30 Days",
      features: ["Family Coverage", "Emergency Help", "24/7 Support"],
    },
  ];

  return (
    <section className="insurance container section">
      <h1 className="title">Travel Insurance Plans</h1>

      <div className="insuranceGrid">
        {plans.map((plan) => (
          <div key={plan.id} className="insuranceCard">
            
            <div className="icon">{plan.icon}</div>

            <h3>{plan.title}</h3>

            <div className="price">{plan.price}</div>
            <p className="duration">{plan.duration}</p>

            <ul>
              {plan.features.map((f, index) => (
                <li key={index}>✔ {f}</li>
              ))}
            </ul>

            <button
              className="btn"
              onClick={() =>
                navigate("/booking", {
                  state: { insurance: plan },
                })
              }
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insurance;