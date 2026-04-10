import { MapPin, Car, Star } from "lucide-react";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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

const Cabs = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 bg-gradient-to-br from-[#fff5f2] to-[#fff] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-700">
          Book a Cab
        </h1>
        <p className="text-gray-500 mb-8 sm:mb-10">
          Reliable rides for every journey
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cabs.map((cab, i) => (
            <div
              key={i}
              className="bg-black rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={cab.image}
                alt={cab.name}
                className="h-32 sm:h-40 lg:h-44 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-3 sm:p-5">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <Car size={16} className="text-[#ff6a5b]" />
                  <h3 className="font-semibold text-sm sm:text-lg">
                    {cab.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                  {cab.desc}
                </p>

                <div className="flex justify-between items-center mt-2 sm:mt-4">
                  <span className="flex items-center gap-1 text-xs sm:text-sm">
                    <Star size={12} className="text-yellow-400" />
                    {cab.rating}
                  </span>

                  <span className="font-bold text-xs sm:text-base text-[#ff6a5b]">
                    {cab.price}
                  </span>
                </div>

                <Link to={`/cab/${i}`}>
  <button className="mt-3 sm:mt-4 w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white py-1.5 sm:py-2.5 text-xs sm:text-sm rounded-xl font-semibold hover:opacity-90">
    Book Cab
  </button>
</Link>
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

export default Cabs;