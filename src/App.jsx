import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Events from "./pages/Events";
import Marketplace from "./pages/Marketplace";
import Plan from "./pages/Plan";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ["Home", "Destinations", "Events", "Marketplace", "Plan Your Trip"];

  return (
    <Router>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-cyan-950 sticky top-0 z-50">
        <div className="text-2xl font-bold text-green-700">GreenTrail</div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex text-white">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/events">Events</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/plan">Plan Your Trip</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Styled like your Navbar example) */}
      {isOpen && (
        <div className="fixed inset-0 bg-cyan-950 z-50 flex flex-col items-center justify-center px-6">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>

          {/* Logo at top */}
          <div className="mb-10">
            <img src="./logo2.png" alt="Logo" className="w-32 animate-pulse" />
          </div>

          {/* Mobile Links */}
          <ul className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 hover:text-green-500 transition-all duration-300 animate-bounce"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

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
