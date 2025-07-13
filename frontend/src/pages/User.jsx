import React, { useState } from "react";
import axios from "axios";

export default function User() {
  const [form, setForm] = useState({
    companyName: "",
    rating: "",
    title: "",
    description: "",
    email: ""
  });
  const [msg, setMsg] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/reviews", form);
      setMsg("Review submitted!");
      setForm({ companyName: "", rating: "", title: "", description: "", email: "" });
    } catch (err) {
      setMsg("Error submitting review");
    }
  };

  return (
    <div>
      <h2>User Page</h2>
      <form onSubmit={handleSubmit}>
        <input name="companyName" placeholder="Company Name" onChange={handleChange} value={form.companyName} required />
        <input name="title" placeholder="Review Title" onChange={handleChange} value={form.title} required />
        <textarea name="description" placeholder="Review Description" onChange={handleChange} value={form.description} required />
        <input name="rating" type="number" min="1" max="5" onChange={handleChange} value={form.rating} required />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} value={form.email} required />
        <button type="submit">Submit Review</button>
      </form>
      <div>{msg}</div>
    </div>
  );
}