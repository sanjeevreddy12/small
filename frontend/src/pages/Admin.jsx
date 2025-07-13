import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("/api/reviews").then(res => setReviews(res.data.data || []));
  }, []);

  return (
    <div>
      <h2>Admin Page (Phase 1)</h2>
      <ul>
        {reviews.map(r => (
          <li key={r.id}>
            {r.email} - {r.companyName} - {r.rating} - {r.title} - {r.description} - {r.createdAt}
          </li>
        ))}
      </ul>
    </div>
  );
}
