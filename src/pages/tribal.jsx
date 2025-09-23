import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Tribal() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const tribalItems = [
    {
      name: "Bamboo Basket",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Bamboo_basket.jpg",
      desc: "Handwoven bamboo basket crafted by local artisans.",
      price: "₹350",
    },
    {
      name: "Wooden Mask",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Tribal_wooden_mask.jpg",
      desc: "Traditional wooden mask used in tribal festivals.",
      price: "₹600",
    },
    {
      name: "Beaded Necklace",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tribal_beaded_necklace.jpg",
      desc: "Colorful beaded necklace made by tribal women.",
      price: "₹250",
    },
    {
      name: "Terracotta Figurine",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Terracotta_figurine.jpg",
      desc: "Handcrafted terracotta figurine representing tribal culture.",
      price: "₹400",
    },
    {
      name: "Bamboo Flute",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Bamboo_flute.jpg",
      desc: "Traditional bamboo flute with melodious sound.",
      price: "₹200",
    },
    {
      name: "Tribal Drum",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tribal_drum.jpg",
      desc: "Handmade drum used in tribal music and dance.",
      price: "₹550",
    },
    {
      name: "Painted Pottery",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Painted_pottery.jpg",
      desc: "Beautifully painted pottery with tribal motifs.",
      price: "₹300",
    },
    {
      name: "Jute Bag",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Jute_bag.jpg",
      desc: "Eco-friendly jute bag crafted by tribal artisans.",
      price: "₹180",
    },
    {
      name: "Tribal Earrings",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Tribal_earrings.jpg",
      desc: "Handcrafted earrings with traditional tribal designs.",
      price: "₹120",
    },
    {
      name: "Tribal Wall Hanging",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tribal_wall_hanging.jpg",
      desc: "Decorative wall hanging featuring tribal art and motifs.",
      price: "₹450",
    },
    {
      name: "Handmade Clay Lamp",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Clay_lamp.jpg",
      desc: "Traditional clay lamp used in tribal households.",
      price: "₹90",
    },
    {
      name: "Tribal Bead Bracelet",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bead_bracelet.jpg",
      desc: "Vibrant bead bracelet crafted by tribal artisans.",
      price: "₹160",
    },
  ];
  const filteredItems = tribalItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10 px-2 md:px-8 bg-white">
      {/* 🔙 Back Button */}
       <div className="flex flex-col md:flex-row items-center gap-3 mb-6 flex-wrap">
    {/* Back Button */}
    <button
      onClick={() => navigate(-1)}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      ← Back
    </button>

    {/* Search Bar */}
    <input
      type="text"
      placeholder="Search Tribal Handicrafts..."
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
      onClick={() => navigate("/cart")}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      Cart
    </button>

    {/* Orders Button */}
    <button
      onClick={() => navigate("/orders")}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      Your Orders
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
