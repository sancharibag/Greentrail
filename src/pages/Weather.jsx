import React, { useState } from "react";

// Suggestions grouped into categories
const suggestions = {
  Adventure: [
    { icon: "🌲", title: "Forest Trek", desc: "Explore Netarhat forests and hidden trails" },
    { icon: "💦", title: "Waterfalls", desc: "Visit Hundru & Dassam falls for breathtaking views" },
    { icon: "🐘", title: "Wildlife Safari", desc: "Betla National Park safari and eco adventures" },
  ],
  Culture: [
    { icon: "🛕", title: "Temple Visits", desc: "Discover Baidhyanath Dham & Sun temple" },
    { icon: "🎶", title: "Festivals", desc: "Tribal dance, local fairs & cultural events" },
    { icon: "🏛️", title: "Heritage Tours", desc: "Explore Ranchi & historic heritage spots" },
  ],
  Gastronomy: [
    { icon: "🍲", title: "Traditional Cuisine", desc: "Taste local Jharkhand dishes & delicacies" },
    { icon: "🍫", title: "Handmade Sweets", desc: "Try regional sweets and chocolates" },
    { icon: "🥘", title: "Eco Stays Dining", desc: "Farm-to-table food experiences" },
  ],
  Wellness: [
    { icon: "🔥", title: "Campfire Nights", desc: "Perfect relaxation under starlit skies" },
    { icon: "⛵", title: "Lakeside Retreat", desc: "Unwind at Patratu valley with calm waters" },
    { icon: "🛖", title: "Eco Stay", desc: "Stay in serene, green homestays" },
  ],
};

export default function Weather() {
  const [activeTab, setActiveTab] = useState("Adventure");

  return (
    <section className="experiences py-20 bg-white" id="weatherwise">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Weatherwise Suggestions</h2>
          <p className="text-gray-600">
            Activities and destinations tailored for your journey
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {Object.keys(suggestions).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border-2 font-medium transition-all ${
                activeTab === tab
                  ? "bg-red-500 text-white border-red-500 scale-105"
                  : "bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {suggestions[activeTab].map((item, i) => (
            <div
              key={i}
              className="experience-item text-center p-8 bg-gray-100 rounded-2xl shadow transition transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="experience-icon w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center text-2xl text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
