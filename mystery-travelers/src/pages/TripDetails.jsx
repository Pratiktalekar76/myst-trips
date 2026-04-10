import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import JoinTripModal from "../components/JoinTripModal";

const tripsData = [
  {
    id: "mahabaleshwar",
    title: "Mahabaleshwar Escape",
    destination: "Mahabaleshwar",
    country: "India",
    price: 8500,
    image: "/images/trip-mahabaleshwar.jpg",
    description:
      "Enjoy the scenic beauty of Mahabaleshwar with hills, waterfalls and strawberry farms.",
    itinerary: [
      "Arrival & local sightseeing",
      "Arthur Seat & Mapro Garden",
      "Shopping & departure",
    ],
  },
  {
    id: "goa",
    title: "Goa Beach Fun",
    destination: "Goa",
    country: "India",
    price: 12000,
    image: "/images/trip-goa.jpg",
    description:
      "Relax on beautiful beaches, enjoy nightlife and water sports in Goa.",
    itinerary: [
      "North Goa beaches",
      "Water sports & leisure",
      "Nightlife & shopping",
    ],
  },
  {
    id: "manali",
    title: "Manali Adventure",
    destination: "Manali",
    country: "India",
    price: 25000,
    image: "/images/trip-manali.jpg",
    description:
      "Adventure trip with snow, mountains, trekking and river rafting.",
    itinerary: [
      "Solang Valley",
      "Snow activities",
      "Local sightseeing",
    ],
  },
  {
    id: "jaipur",
    title: "Jaipur Palace",
    destination: "Jaipur",
    country: "India",
    price: 30000,
    image: "/images/trip-jaipur.jpg",
    description:
      "Explore royal palaces, forts and rich Rajasthani culture.",
    itinerary: [
      "Amber Fort",
      "City Palace",
      "Local markets",
    ],
  },
  {
    id: "kerala",
    title: "Kerala Natures",
    destination: "Kerala",
    country: "India",
    price: 25000,
    image: "/images/trip-kerla.jpg",
    description:
      "Backwaters, greenery, houseboats and peaceful nature vibes.",
    itinerary: [
      "Munnar hills",
      "Houseboat stay",
      "Local sightseeing",
    ],
  },
  {
    id: "kokan",
    title: "Kokan WaterSports",
    destination: "Kokan",
    country: "India",
    price: 13000,
    image: "/images/trip-kokan.jpg",
    description:
      "Enjoy water sports and beaches in the beautiful Konkan region.",
    itinerary: [
      "Beach visit",
      "Water sports",
      "Relax & return",
    ],
  },
  {
    id: "thailand",
    title: "Thailand Trip",
    destination: "Thailand",
    country: "Thailand",
    price: 205000,
    image: "/images/trip-thailand.jpg",
    description:
      "International trip with beaches, culture, shopping and nightlife.",
    itinerary: [
      "Bangkok city tour",
      "Pattaya beach",
      "Shopping & return",
    ],
  },
];

const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // 🔥 FIX: slug OR numeric id dono support
  const trip =
    tripsData.find((t) => t.id === id) ||
    tripsData[Number(id) - 1];

  if (!trip) {
    return (
      <div className="pt-32 text-center text-gray-400">
        Trip not found
      </div>
    );
  }

  return (
    <div className="pt-32 px-8 max-w-5xl mx-auto text-white">

      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-[380px] object-cover rounded-2xl shadow"
      />

      <div className="mt-8">
        <h1 className="text-3xl font-bold">{trip.title}</h1>

        <p className="text-gray-500 mt-1">
          {trip.destination}, {trip.country}
        </p>

        <p className="text-[#ff7a5c] font-bold text-xl mt-4">
          ₹ {trip.price} / person
        </p>

        <p className="mt-6 leading-relaxed">
          {trip.description}
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Itinerary
        </h3>

        <ul className="space-y-2">
          {trip.itinerary.map((day, i) => (
            <li
              key={i}
              className="bg-[#ff7a5c] px-4 py-3 rounded-lg"
            >
              <b>Day {i + 1}:</b> {day}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-10">
          <button
            onClick={() => navigate(-1)}
            className="border border-gray-300 px-6 py-3 rounded-xl"
          >
            ← Back
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="bg-[#ff7a5c] text-white px-10 py-3 rounded-xl font-semibold"
          >
            Join Trip
          </button>
        </div>
      </div>

      {showModal && (
        <JoinTripModal
          trip={trip}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default TripDetails;
