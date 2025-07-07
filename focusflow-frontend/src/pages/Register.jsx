import React, { useState } from "react";
import axios from "../api/api";
import { useNavigate } from "react-router-dom";
import "../pages/Register.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      setError(msg);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>

        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={form.email} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
