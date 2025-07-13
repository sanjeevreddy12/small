import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "", role: "User" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", form);
      setMsg("Registered! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option>User</option>
        <option>Admin</option>
      </select>
      <button type="submit">Register</button>
      <div>{msg}</div>
    </form>
  );
}