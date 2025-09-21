import React from "react";
import { ShoppingBag } from "lucide-react";

export default function Marketplace() {
  const items = [
    {
      name: "Tribal Handicrafts",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tribal_handicrafts_Jharkhand.jpg",
      price: "₹500 - ₹2000",
      desc: "Beautiful bamboo and wooden crafts made by tribal artisans.",
    },
    {
      name: "Dokra Art",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Dokra_art.jpg",
      price: "₹1500 - ₹5000",
      desc: "Traditional brass and metal craft symbolizing Jharkhand’s cultural richness.",
    },
    {
      name: "Handwoven Textiles",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Handloom_textiles.jpg",
      price: "₹800 - ₹3000",
      desc: "Unique handwoven saris and fabrics showcasing tribal patterns.",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Local Marketplace</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg border hover:shadow-2xl transition">
            <img src={item.img} alt={item.name} className="h-56 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold flex items-center mb-2">
                <ShoppingBag className="mr-2 text-green-600" size={20} /> {item.name}
              </h3>
              <p className="text-gray-600 mb-1">{item.price}</p>
              <p className="text-gray-700">{item.desc}</p>
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
