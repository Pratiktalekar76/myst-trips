import { useParams } from "react-router-dom";
import { Star, Car } from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";

const cabs = [
  {
    name: "Sedan",
    desc: "Comfortable rides for city travel",
    price: "₹12 / km",
    rating: 4.6,
    image: "/images/cab-1.jpg",
  },
  {
    name: "SUV",
    desc: "Spacious & perfect for group trips",
    price: "₹18 / km",
    rating: 4.8,
    image: "/images/cab-2.jpg",
  },
  {
    name: "Luxury",
    desc: "Premium comfort & style",
    price: "₹25 / km",
    rating: 4.9,
    image: "/images/cab-3.jpg",
  },
  {
    name: "Mini",
    desc: "Affordable rides for short distance",
    price: "₹9 / km",
    rating: 4.5,
    image: "/images/cab-4.jpg",
  },
  {
    name: "Tempo Traveller",
    desc: "Best for family & group tours",
    price: "₹30 / km",
    rating: 4.7,
    image: "/images/cab-5.jpg",
  },
  {
    name: "Electric Cab",
    desc: "Eco-friendly & silent rides",
    price: "₹14 / km",
    rating: 4.6,
    image: "/images/cab-6.jpg",
  },
];

export default function CabDetails() {
  const { id } = useParams();
  const cab = cabs[id];
  const [booked, setBooked] = useState(false);

  if (!cab) return <div className="pt-28 text-center">Cab not found</div>;

  return (
    <div className="min-h-screen pt-24 sm:pt-28 bg-[#fff5f2] px-3 sm:px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md sm:shadow-lg overflow-hidden">

        {/* IMAGE */}
        <img
          src={cab.image}
          alt={cab.name}
          className="w-full h-48 sm:h-64 object-cover"
        />

        {/* CONTENT */}
        <div className="p-4 sm:p-6">

          <h1 className="text-lg sm:text-2xl font-bold text-black flex items-center gap-2">
            <Car className="text-[#ff6a5b]" size={20} /> {cab.name}
          </h1>

          <p className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-2">
            {cab.desc}
          </p>

          {/* PRICE + RATING */}
          <div className="flex justify-between items-center mt-3 sm:mt-4">

            <span className="flex items-center gap-1 text-sm sm:text-base">
              <Star size={16} className="text-yellow-400" /> {cab.rating}
            </span>

            <span className="font-semibold sm:font-bold text-base sm:text-lg text-[#ff6a5b]">
              {cab.price}
            </span>

          </div>

          {/* BUTTON / SUCCESS */}
          {!booked ? (
            <button
              onClick={() => setBooked(true)}
              className="mt-5 sm:mt-6 w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base active:scale-95 transition"
            >
              Confirm Booking
            </button>
          ) : (
            <div className="mt-5 sm:mt-6 p-3 sm:p-4 bg-green-100 text-green-700 rounded-xl text-center font-semibold text-sm sm:text-base">
              ✅ Cab booked successfully!
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}