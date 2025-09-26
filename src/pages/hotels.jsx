import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hotels() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const hotel_names = [
    {
      name: "Tribal Handloom Saree",
      img: "src/assets/tribal-handloom-saree.jpg",
      desc: "Beautiful handwoven saree with traditional tribal patterns.",
      price: "₹1,500",
    },
    {
      name: "Cotton Shawl",
      img: "src/assets/cotton-shawl.jpg",
      desc: "Soft cotton shawl crafted by local weavers.",
      price: "₹900",
    },
    {
      name: "Jute Table Runner",
      img: "src/assets/Jute-Table-Runner.jpg",
      desc: "Eco-friendly jute table runner with tribal motifs.",
      price: "₹650",
    },
    {
      name: "Woolen Blanket",
      img: "src/assets/woolen-blanket.JPG",
      desc: "Warm woolen blanket handwoven by artisans.",
      price: "₹1,200",
    },
    {
      name: "Handloom Dupatta",
      img: "src/assets/handloom-dupatta.jpg",
      desc: "Elegant dupatta with intricate tribal designs.",
      price: "₹700",
    },
    {
      name: "Tribal Cushion Cover",
      img: "src/assets/tribal-cushion-cover.jpeg",
      desc: "Colorful cushion cover made from handwoven fabric.",
      price: "₹350",
    },
    {
      name: "Bamboo Mat",
      img: "src/assets/bamboo-mat.jpeg",
      desc: "Durable bamboo mat woven by tribal artisans.",
      price: "₹400",
    },
    {
      name: "Handwoven Tote Bag",
      img: "src/assets/handwoven-tote-bag.jpeg",
      desc: "Stylish tote bag made from handwoven material.",
      price: "₹550",
    },
    {
      name: "Tribal Table Cloth",
      img: "src/assets/tribal-table-cloth.png",
      desc: "Table cloth featuring vibrant tribal patterns.",
      price: "₹800",
    },
    {
      name: "Handloom Scarf",
      img: "src/assets/Handloom-scarf.jpg",
      desc: "Soft scarf with traditional handloom weaving.",
      price: "₹300",
    },
    {
      name: "Woven Wall Hanging",
      img: "src/assets/woven-wall-hanging.png",
      desc: "Decorative wall hanging made from handwoven threads.",
      price: "₹600",
    },
    {
      name: "Tribal Apron",
      img: "src/assets/tribal-apron.png",
      desc: "Apron with unique tribal handwoven designs.",
      price: "₹250",
    },
  ];

  // Filter items based on search query
  const filteredItems = hotel_names.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10 px-2 md:px-8 bg-white">
      {/* 🔙 Back Button */}
       <div className="flex flex-col md:flex-row items-center gap-3 mb-6 flex-wrap">
    {/* Back Button */}
    <button
      onClick={() => navigate("/")}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      ← Back
    </button>

    {/* Search Bar */}
    <input
      type="text"
      placeholder="Search Hotel Names..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition shadow-sm min-w-[200px]"
    />

    {/* Wishlist Button */}
    <button
      onClick={() => navigate("/wishlist")}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      Wishlist
    </button>

    {/* Cart Button */}
    <button
      onClick={() => navigate("/locations")}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      Lcations
    </button>

    {/* Orders Button */}
    <button
      onClick={() => navigate("/bookings")}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      Your Bookings
    </button>
      </div>

      {/* 🔹 Page Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
        Handwoven Textiles
      </h2>

      {/* 🔹 Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md border hover:shadow-xl transition bg-white flex flex-col animate-fade-in-up"
              style={{
                minWidth: 0,
                animationDelay: `${i * 100}ms`,
                animationDuration: "600ms",
                animationFillMode: "both",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-32 w-full object-cover scale-100 hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 md:p-3 flex-1 flex flex-col">
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  {item.name}
                </h3>
                <p className="text-green-700 font-bold text-sm mb-1">
                  {item.price}
                </p>
                <p className="text-gray-700 text-xs md:text-sm mb-2 flex-1">
                  {item.desc}
                </p>
                <button className="bg-green-600 text-white text-xs md:text-sm px-2 py-1 rounded hover:bg-green-700 transition self-start">
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-8">
            No items found for "{searchQuery}"
          </p>
        )}
      </div>

      {/* 🔹 Animation styles */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(-20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.6s;
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation-name: fade-in-up;
          }
        `}
      </style>
    </div>
  );
}
