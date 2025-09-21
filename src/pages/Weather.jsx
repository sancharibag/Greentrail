import React, { useEffect, useState } from "react";

// Fixed images and suggestions for each season
const suggestions = {
  winter: [
    { 
      title: "Forest Trek 🌲", 
      desc: "Explore Netarhat forests", 
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=60" 
    },
    { 
      title: "Waterfalls 💦", 
      desc: "Visit Hundru & Dassam falls", 
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60" 
    },
    { 
      title: "Campfire 🔥", 
      desc: "Perfect for chilly evenings", 
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=60" 
    },
  ],
  summer: [
    { 
      title: "City Tours 🏙️", 
      desc: "Ranchi & heritage spots", 
      img: "https://images.unsplash.com/photo-1486308510493-aa64833636b3?auto=format&fit=crop&w=1200&q=60" 
    },
    { 
      title: "Temple Visits 🛕", 
      desc: "Baidhyanath Dham, Sun temple", 
      img: "https://images.unsplash.com/photo-1526481280694-3f15a2f67fa8?auto=format&fit=crop&w=1200&q=60" 
    },
    { 
      title: "Wildlife 🐘", 
      desc: "Betla National Park safari", 
      img: "https://images.unsplash.com/photo-1516908205727-40afad9449a5?auto=format&fit=crop&w=1200&q=60" 
    },
  ],
  rainy: [
    { 
      title: "Lakeside ⛵", 
      desc: "Relax at Patratu valley", 
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60" 
    },
    { 
      title: "Festivals 🎶", 
      desc: "Enjoy tribal dance & fairs", 
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=60" 
    },
    { 
      title: "Eco Stay 🛖", 
      desc: "Stay in green homestays", 
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=60" 
    },
  ],
};

const sizes = ["h-64", "h-80", "h-96"];

// Gradient backgrounds for each season
const bgColors = {
  winter: "from-blue-800 via-blue-900 to-black",
  summer: "from-yellow-600 via-yellow-700 to-orange-800",
  rainy: "from-green-700 via-green-900 to-blue-900",
};

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Simulate temperature for demo
    const simulatedWeather = { main: { temp: Math.floor(Math.random() * 40) } };
    setTimeout(() => setWeather(simulatedWeather), 500);
  }, []);

  // Determine highlighted season based on temperature
  const getHighlighted = (temp) => {
    if (temp < 15) return "winter";
    if (temp < 30) return "summer";
    return "rainy";
  };

  const highlighted = weather ? getHighlighted(weather.main.temp) : null;

  // Render cards for a season
  const renderCards = (season) =>
    suggestions[season].map((card, i) => (
      <div
        key={`${season}-${i}`}
        className={`relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105 ${sizes[i % sizes.length]} ${
          highlighted === season ? "border-4 border-green-500" : "border border-transparent"
        }`}
      >
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
          <p className="text-white/90">{card.desc}</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-green-500/80 text-white rounded-full hover:bg-green-600 transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="w-full">
      {["winter", "summer", "rainy"].map((season) => (
        <section
          key={season}
          className={`relative min-h-screen px-6 py-20 flex flex-col justify-start items-center bg-gradient-to-br ${bgColors[season]}`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white capitalize">
            {season} Suggestions
          </h2>

          <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {weather ? renderCards(season) : (
              <p className="col-span-3 text-center text-2xl text-white/80">
                Loading {season} suggestions...
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
