// src/pages/GuidePage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { guides } from "../data/initGuides";

export default function GuidePage() {
  const { id } = useParams(); // get guide id from URL
  const navigate = useNavigate();

  // find guide by id
  const guide = guides.find((g) => g.id === parseInt(id));

  if (!guide) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Guide Not Found</h2>
        <button
          onClick={() => navigate("/guides")}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Back to Guides
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate("/guides")}
        className="text-green-700 font-semibold hover:underline mb-6"
      >
        ← Back to Guides
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Guide Image */}
        <img
          src={guide.img}
          alt={guide.name}
          className="w-full h-64 object-cover"
        />

        {/* Guide Details */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2 text-green-700">{guide.name}</h2>
          <p className="text-gray-700 mb-4">{guide.desc}</p>

          <p className="text-gray-600 mb-1">
            <strong>Rating:</strong> ⭐ {guide.rating}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Phone:</strong> {guide.phone}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Languages:</strong> {guide.languages.join(", ")}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Specialties:</strong> {guide.specialties.join(", ")}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Availability:</strong> {guide.availability}
          </p>
          <p className="text-green-700 font-bold text-lg mb-4">
            Price: {guide.pricePerDay}
          </p>

          <button
            onClick={() => navigate(`/booking/guide/${guide.id}`)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
