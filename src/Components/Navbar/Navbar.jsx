import React, { useState } from "react";
import { MdTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="a" className="logo flex">
            <h1><MdTravelExplore /> Travel</h1>
          </a>
        </div>

        <div className={active}>
         <ul className="navLists flex">
  <li className="navItem">
    <Link to="/" className="navLink">Home</Link>
  </li>

  <li className="navItem">
    <Link to="/packages" className="navLink">Packages</Link>
  </li>

  <li className="navItem">
    <Link to="/shop" className="navLink">Shop</Link>
  </li>

  <li className="navItem">
    <Link to="/about" className="navLink">About</Link>
  </li>
   <li className="navItem">
    <Link to="/chatbot" className="navLink">Chatbot</Link>
  </li>
  <li className="navItem">
    <Link to="/contact" className="navLink">Contact</Link>
  </li>
  <button className="btn">
    <Link to="/booking" state={{ destination: "" }}>Book Now</Link>
  </button>
   <button
  className="btn"
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
>
  Logout
</button>

</ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <IoCloseCircleSharp className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <PiDotsNineBold className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
