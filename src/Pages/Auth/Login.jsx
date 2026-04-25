// src/Pages/Auth/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { loginUser } from "../../auth";
import "./auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("auth/login/", formData);
      loginUser(res.data.token);
      navigate("/"); // redirect to home after login
    } catch (error) {
      alert("Invalid username or password");
    }
  };

  return (
    <section className="auth">
     <div className="authContainer">
  <h2>Login</h2>

  <form onSubmit={handleSubmit}>
    <input
      name="username"
      placeholder="Username"
      onChange={handleChange}
      required
    />

    <input
      name="password"
      type="password"
      placeholder="Password"
      onChange={handleChange}
      required
    />

    <button className="btnn">Login</button>
  </form>

  {/* ✅ NEW SIGNUP OPTION */}
  <p style={{ marginTop: "10px", textAlign: "center" }}>
    Don't have an account?{" "}
    <span
      onClick={() => navigate("/register")}
      style={{
        color: "#007bff",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      Sign Up
    </span>
  </p>
</div>
    </section>
  );
};

export default Login;







