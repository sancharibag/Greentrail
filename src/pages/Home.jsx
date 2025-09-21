import React from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";

// Images for travel cards (replace with your own if needed)
const travelCards = [
  {
    title: "Hotels",
    desc: "Find comfortable hotels easily",
    img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Apartments",
    desc: "Book modern apartments",
    img: "https://images.unsplash.com/photo-1580584126965-1c8a9b524276?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Car Rentals",
    desc: "Rent cars to explore freely",
    img: "https://images.unsplash.com/photo-1601758123927-1b1b5b9f84a5?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Flights",
    desc: "Book flights quickly",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Trains",
    desc: "Reserve train tickets",
    img: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=800&q=60",
  },
    {
    title: "bikes, buses",
    desc: "book bus tickets, rent bikes",
    img: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=800&q=60",
  },
  
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Section 1 - Video Hero */}
      <div className="relative h-screen w-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="src/assets/jharkhand.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to Jharkhand 🌿</h1>
          <p className="max-w-2xl text-lg mb-8">
            Experience the natural beauty, waterfalls, forests, and rich culture
            of Jharkhand.
          </p>
          <Link
            to="/marketplace"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            Explore More
          </Link>
        </div>
      </div>

      {/* Section 2 - Travel & Stay (Hotels, Apartments, Car Rentals, Flights, Trains) */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 via-black to-green-800 text-white py-12">
        <h2 className="text-3xl font-bold mb-10">Travel & Stay 🛶</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12">
          {travelCards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition hover:scale-105"
            >
              {/* Background image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover brightness-75"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-green-200 mt-1">{card.desc}</p>
                <div className="mt-4">
                  <button className="px-4 py-2 bg-green-500/80 text-white rounded-full hover:bg-green-600 transition">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Weather Suggestions */}
      <section className="bg-gradient-to-br from-green-800 via-green-900 to-black text-white">
        <Weather />
      </section>
    </div>
  );
}
