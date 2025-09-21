import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Events from "./pages/Events";
import Marketplace from "./pages/Marketplace";
import Plan from "./pages/Plan";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-cyan-950 sticky top-0 z-50">
        <div className="text-2xl font-bold text-green-700">GreenTrail</div>
        <div className="space-x-6 hidden md:flex">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/events">Events</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/plan">Plan Your Trip</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>

      {/* Chatbot Section */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-700 text-white px-5 py-4 rounded-full shadow-lg hover:bg-green-800 transition-colors">
          ChatBot
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Jharkhand Tourism | Prototype</p>
      </footer>
    </Router>
  );
}
