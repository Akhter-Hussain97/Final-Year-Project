import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";

const PackageDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const pkg = state?.package;

  if (!pkg) {
    return <h2 style={{ textAlign: "center" }}>No Data Found</h2>;
  }

  return (
    <section className="packageDetails container section">
      {/* HEADER */}
      <div className="detailsHeader">
        <h1 style={{marginTop:"20px"}}>{pkg.destTitle}</h1>
        <span className="location flex">
          <HiOutlineLocationMarker className="icon" />
          {pkg.location}
        </span>
      </div>

      {/* CONTENT */}
      <div className="detailsContent">
        {/* IMAGE */}
        <div className="imageDiv">
          <img src={pkg.imgSrc} alt={pkg.destTitle} />
        </div>

        {/* INFO */}
        <div className="infoDiv">
          <h3>About this place</h3>
          <p>{pkg.description}</p>

          <ul className="features">
            <li>✔ 7 Days Tour</li>
            <li>✔ Free Guide</li>
            <li>✔ Hotel Included</li>
          </ul>

          <div className="priceBox">
            <h2>${pkg.price}</h2>
          </div>

          <div className="btns">
            <button
              className="btn"
              onClick={() =>
                navigate("/booking", { state: { package: pkg } })
              }
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;