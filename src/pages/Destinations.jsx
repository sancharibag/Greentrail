import React from "react";
import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function Destinations() {
  const places = [
    {
      id: "netarhat",
      name: "Netarhat",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Netarhat_sunset.jpg",
      description: "Known as the 'Queen of Chotanagpur', famous for breathtaking sunrises and sunsets.",
    },
    {
      id: "patratu",
      name: "Patratu Valley",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Patratu_Valley.jpg",
      description: "Scenic valley with winding roads and lush green hills.",
    },
    {
      id: "betla",
      name: "Betla National Park",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Betla_National_Park.jpg",
      description: "Wildlife sanctuary known for elephants, tigers, and rich biodiversity.",
    },
    {
      id: "hundru",
      name: "Hundru Falls",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Hundru_Falls%2C_Ranchi.jpg",
      description: "One of the most famous waterfalls in Jharkhand, a popular picnic spot.",
    },
    {
      id: "dassam",
      name: "Dassam Falls",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Dassam_falls.jpg",
      description: "Spectacular 144 ft waterfall near Ranchi, ideal for photography.",
    },
    {
      id: "deoghar",
      name: "Deoghar (Baidyanath Temple)",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Baidyanath_Temple_Deoghar.jpg",
      description: "A major Hindu pilgrimage site and one of the 12 Jyotirlingas.",
    },
    {
      id: "jonha",
      name: "Jonha Falls",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Jonha_Falls.jpg",
      description: "A hanging valley falls, surrounded by scenic landscapes.",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Top Destinations</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {places.map((place) => (
          <SwiperSlide key={place.id}>
            <Link to={`/destination/${place.id}`}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition cursor-pointer">
                <img src={place.img} alt={place.name} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <MapPin className="mr-2 text-green-600" size={18} />
                    {place.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{place.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
