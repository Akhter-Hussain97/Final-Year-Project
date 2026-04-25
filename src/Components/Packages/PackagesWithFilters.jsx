import React, { useState } from "react";
import "./packages.scss";

const data = [
  { id: 1, title: "Bora Bora", country: "New Zealand", days: 5, price: 700 },
  { id: 2, title: "Machu Picchu", country: "Peru", days: 4, price: 600 },
  { id: 3, title: "Cappadocia", country: "Turkey", days: 3, price: 800 },
  { id: 4, title: "Taj Mahal", country: "India", days: 2, price: 500 }
];

const PackagesWithFilter = () => {
  const [country, setCountry] = useState("");
  const [days, setDays] = useState("");
  const [price, setPrice] = useState(1000);

  const filteredData = data.filter(pkg =>
    (country === "" || pkg.country === country) &&
    (days === "" || pkg.days <= days) &&
    pkg.price <= price
  );

  return (
    <section className="packages section container">
      <h1>Filter Packages</h1>

      {/* FILTER BAR */}
      <div className="filterBar grid">
        <select onChange={(e) => setCountry(e.target.value)}>
          <option value="">Country</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Peru">Peru</option>
          <option value="Turkey">Turkey</option>
          <option value="India">India</option>
        </select>

        <select onChange={(e) => setDays(e.target.value)}>
          <option value="">Days</option>
          <option value="2">2 Days</option>
          <option value="3">3 Days</option>
          <option value="4">4 Days</option>
          <option value="5">5 Days</option>
        </select>

        <input
          type="range"
          min="300"
          max="1000"
          onChange={(e) => setPrice(e.target.value)}
        />
        <span>Max Price: ${price}</span>
      </div>

      {/* PACKAGES LIST */}
      <div className="packagesGrid">
        {filteredData.map(pkg => (
          <div key={pkg.id} className="packageCard">
            <h3>{pkg.title}</h3>
            <p>{pkg.country}</p>
            <p>{pkg.days} Days</p>
            <h4>${pkg.price}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesWithFilter;
