import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Booking from "./pages/Booking";
import AdminPortal from "./pages/AdminPortal";
import UserPortal from "./pages/UserPortal";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/events" element={<Events />} />
  <Route path="/booking" element={<Booking />} />
  <Route path="/admin/portal" element={<AdminPortal />} />
  <Route path="/user" element={<UserPortal />} />
  <Route path="/admin/login" element={<AdminLogin />} />
  <Route path="/admin/dashboard" element={<AdminDashboard />} />
</Routes>

      <Footer />
    </Router>
  );
}

export default App;
