import { useParams, useNavigate } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import Footer from "../components/Footer";

const hotels = [
  {
    id: "ocean-view",
    name: "Ocean View Resort",
    location: "Maldives",
    rating: 4.8,
    price: "₹18,000 / night",
    image: "/images/hotel-1.jpg",
    description:
      "Enjoy luxury stay with ocean views, infinity pool and private beach access.",
  },
  {
    id: "mountain-escape",
    name: "Mountain Escape",
    location: "Manali, India",
    rating: 4.6,
    price: "₹6,500 / night",
    image: "/images/hotel-2.jpg",
    description:
      "Peaceful stay surrounded by mountains with cozy rooms and bonfire nights.",
  },
  {
    id: "city-lights",
    name: "City Lights Hotel",
    location: "Dubai",
    rating: 4.9,
    price: "₹14,000 / night",
    image: "/images/hotel-3.jpg",
    description:
      "Experience luxury in the heart of the city with rooftop pool and skyline views.",
  },
  {
    id: "royal-palace",
    name: "Royal Palace Stay",
    location: "Jaipur, India",
    rating: 4.7,
    price: "₹9,000 / night",
    image: "/images/hotel-4.jpg",
    description:
      "Royal heritage stay with traditional interiors and cultural experience.",
  },
  {
    id: "lakeview",
    name: "Lakeview Retreat",
    location: "Udaipur, India",
    rating: 4.5,
    price: "₹7,500 / night",
    image: "/images/hotel-5.jpg",
    description:
      "Relaxing stay with beautiful lake views and rooftop dining.",
  },
  {
    id: "skyline",
    name: "Skyline Luxury",
    location: "Singapore",
    rating: 4.9,
    price: "₹16,000 / night",
    image: "/images/hotel-6.jpg",
    description:
      "Modern luxury stay with premium rooms and city skyline views.",
  },
];

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotels.find((h) => h.id === id);

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Hotel not found
      </div>
    );
  }

  return (
    <div className="bg-[#f8f8f8] min-h-screen pt-24">

      {/* IMAGE */}
      <div className="max-w-6xl mx-auto px-4">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-72 md:h-96 object-cover rounded-2xl shadow"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 mt-8 bg-white rounded-2xl shadow p-6 md:p-10">

        <h1 className="text-black text-2xl md:text-3xl font-bold">{hotel.name}</h1>

        <p className="flex items-center gap-2 text-gray-500 mt-2">
          <MapPin size={16} /> {hotel.location}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <Star size={16} className="text-yellow-400" />
          <span className="font-semibold">{hotel.rating}</span>
        </div>

        <p className="mt-6 text-gray-600 leading-relaxed">
          {hotel.description}
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 gap-4">
          <p className="text-2xl font-bold text-[#ff6a5b]">
            {hotel.price}
          </p>

          <button
            onClick={() => alert("Booking Confirmed 🎉")}
            className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Confirm Booking
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default HotelDetails;