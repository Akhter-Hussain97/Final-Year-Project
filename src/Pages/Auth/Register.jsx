// src/Pages/Auth/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import "./auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("auth/register/", formData);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Server not reachable");
      }
    }
  };

  return (
    <section className="auth">
      <div className="authContainer">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button className="btnn">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Register;













