import { Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const hotels = [
  {
    id: "ocean-view",
    name: "Ocean View Resort",
    location: "Maldives",
    rating: 4.8,
    price: "₹18,000 / night",
    image: "/images/hotel-1.jpg",
  },
  {
    id: "mountain-escape",
    name: "Mountain Escape",
    location: "Manali, India",
    rating: 4.6,
    price: "₹6,500 / night",
    image: "/images/hotel-2.jpg",
  },
  {
    id: "city-lights",
    name: "City Lights Hotel",
    location: "Dubai",
    rating: 4.9,
    price: "₹14,000 / night",
    image: "/images/hotel-3.jpg",
  },
  {
    id: "royal-palace",
    name: "Royal Palace Stay",
    location: "Jaipur, India",
    rating: 4.7,
    price: "₹9,000 / night",
    image: "/images/hotel-4.jpg",
  },
  {
    id: "lakeview",
    name: "Lakeview Retreat",
    location: "Udaipur, India",
    rating: 4.5,
    price: "₹7,500 / night",
    image: "/images/hotel-5.jpg",
  },
  {
    id: "skyline",
    name: "Skyline Luxury",
    location: "Singapore",
    rating: 4.9,
    price: "₹16,000 / night",
    image: "/images/hotel-6.jpg",
  },
];

const Hotels = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000] min-h-screen pt-24 md:pt-32 px-4 md:px-10 lg:px-15">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl md:text-3xl font-bold mb-2">Hotels</h1>
        <p className="text-white mb-6 md:mb-8 text-sm md:text-base">
          Find comfortable stays for your perfect trip
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {hotels.map((hotel, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-36 md:h-52 w-full object-cover"
              />

              <div className="p-3 md:p-5">
                <h3 className="text-black font-semibold text-sm md:text-lg">
                  {hotel.name}
                </h3>

                <p className="flex items-center gap-1 text-xs md:text-sm text-gray-500 mt-1">
                  <MapPin size={14} /> {hotel.location}
                </p>

                <div className="flex items-center justify-between mt-2 md:mt-3">
                  <span className="flex items-center gap-1 text-xs md:text-sm">
                    <Star size={14} className="text-yellow-400" />
                    {hotel.rating}
                  </span>

                  <span className="font-semibold text-[#ff6a5b] text-xs md:text-base">
                    {hotel.price}
                  </span>
                </div>

                {/* ✅ BUTTON ACTION */}
                <button
                  onClick={() => navigate(`/hotel/${hotel.id}`)}
                  className="mt-3 md:mt-4 w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white py-2 md:py-2.5 rounded-xl font-semibold text-xs md:text-sm hover:opacity-90"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Hotels;