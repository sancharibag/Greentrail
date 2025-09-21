import React from "react";
import { Calendar } from "lucide-react";

export default function Events() {
  const events = [
    {
      name: "Sarhul Festival",
      date: "April 2025",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sarhul_festival.jpg",
      desc: "A vibrant tribal festival celebrating nature, marked with dance, music, and rituals under the sacred Sal tree.",
    },
    {
      name: "Karma Festival",
      date: "September 2025",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Karma_dance.jpg",
      desc: "A tribal harvest festival with mesmerizing Karma dance and music, symbolizing prosperity and community bonding.",
    },
    {
      name: "Chhath Puja",
      date: "November 2025",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Chhath_Puja_at_sunrise.jpg",
      desc: "One of the most spiritual festivals of Jharkhand, devoted to the Sun God, performed on riverbanks with great devotion.",
    },
    {
      name: "Makar Sankranti",
      date: "January 2025",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Makar_Sankranti_Celebration.jpg",
      desc: "Harvest festival celebrated with kite flying, traditional sweets, and community gatherings.",
    },
    {
      name: "Holi",
      date: "March 2025",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Holi_Celebration.jpg",
      desc: "Festival of colors with joyful celebrations, music, and dancing, marking the arrival of spring.",
    },
    {
      name: "Diwali",
      date: "October 2025",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Diwali_Celebration.jpg",
      desc: "Festival of lights celebrated with lamps, fireworks, and sweets, symbolizing victory of light over darkness.",
    },
  ];

  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-br from-green-900 via-green-700 to-green-400">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-100 mb-4 neon-text">Festivals & Events</h2>
        <p className="text-green-200 mb-12 text-lg md:text-xl">Experience Jharkhand’s vibrant cultural and spiritual festivals</p>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-10 backdrop-blur-md border-2 border-green-700 hover:scale-105 hover:shadow-green-700/50 transition-transform duration-300">
              <img src={event.img} alt={event.name} className="h-56 w-full object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold flex items-center mb-2 neon-text">
                  <Calendar className="mr-2 text-green-700" size={20} /> {event.name}
                </h3>
                <p className="text-green-300 mb-2">{event.date}</p>
                <p className="text-white">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 px-8 py-3 bg-gradient-to-r from-green-900 via-green-700 to-green-400 text-white uppercase font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-green-700/50 transition-all duration-300">
          Learn More
        </button>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow:
            0 0 5px #006400,
            0 0 10px #006400,
            0 0 20px #228B22,
            0 0 40px #228B22;
        }
      `}</style>
    </section>
  );
}
