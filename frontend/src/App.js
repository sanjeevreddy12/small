import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./pages/User";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user">User Page</Link> | <Link to="/admin">Admin Page</Link>
      </nav>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App; 