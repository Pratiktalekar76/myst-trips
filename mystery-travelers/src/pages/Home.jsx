import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Heart, MapPin, Calendar, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import TopDestinations from "../components/TopDestinations";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import trips from "../data/trips";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= HOME ================= */

export default function Home() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      `/trips?location=${encodeURIComponent(location)}&date=${encodeURIComponent(
        date
      )}`
    );
  };

  return (
    <div className="bg-white text-gray-900">

      /* ================= HERO ================= */
<motion.section
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="min-h-screen flex items-center px-4 md:px-20"
  style={{
    backgroundImage:
      "linear-gradient(135deg, #ff7a5c, #ff9a76), url('/images/hero-travel.jpg')",
    backgroundBlendMode: "overlay",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="max-w-3xl text-white">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
      Experience <br /> Mysterious <br /> Group Trips
    </h1>

    <p className="mt-4 md:mt-6 text-sm md:text-lg opacity-90">
      Travel with friends you haven’t met before. Join expertly designed
      trips with 3–8 fellow adventurers.
    </p>

    {/* Search */}
    <div className="mt-6 md:mt-10 bg-white rounded-2xl p-3 flex flex-col md:flex-row md:items-center gap-3 text-gray-700 shadow-xl">
      <div className="flex items-center gap-2 flex-1 px-3">
        <MapPin size={18} />
        <input
          placeholder="Where to?"
          className="outline-none w-full text-sm md:text-base"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 px-3 md:border-l">
        <Calendar size={18} />
        <input
          type="date"
          className="outline-none text-sm md:text-base"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button
        className="bg-[#ff7a5c] text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold hover:scale-105 transition text-sm md:text-base"
        onClick={handleSearch}
      >
        Find Trips
      </button>
    </div>
  </div>
</motion.section>

{/* ================= FEATURED TRIPS ================= */}
<motion.section
  className="px-4 md:px-20 py-16 md:py-24"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12 gap-3">
    <div>
      <h2 className="text-2xl md:text-4xl font-bold">Featured Trips</h2>
      <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">
        Handpicked adventures waiting for you
      </p>
    </div>

    <Link
      to="/trips"
      className="text-[#ff7a5c] font-semibold hover:underline text-sm md:text-base"
    >
      View all trips →
    </Link>
  </div>

  <motion.div
    className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {trips.map((trip) => (
      <motion.div
        key={trip.id}
        variants={cardAnimation}
        whileHover={{ y: -10, scale: 1.02 }}
        onClick={() => navigate(`/trips/${trip.id}`)}
        className="bg-white rounded-2xl md:rounded-3xl shadow-md md:shadow-lg overflow-hidden cursor-pointer"
      >
        <div className="relative">
          <img
            src={trip.image}
            alt={trip.title}
            className="h-40 md:h-60 w-full object-cover"
          />

          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 md:top-4 md:right-4 bg-white p-1.5 md:p-2 rounded-full shadow"
          >
            <Heart size={16} />
          </button>

          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-1 text-white text-xs md:text-sm">
            <MapPin size={12} />
            {trip.location}
          </div>
        </div>

        <div className="p-3 md:p-5">
          <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
            <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#ff7a5c] text-white flex items-center justify-center font-bold text-xs md:text-sm">
              {trip.host[0]}
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold">{trip.host}</p>
              <div className="flex items-center text-[10px] md:text-xs text-gray-500">
                <Star size={10} className="text-yellow-500 mr-1" />
                {trip.rating}
              </div>
            </div>
          </div>

          <h3 className="font-bold text-sm md:text-lg">{trip.title}</h3>

          <div className="flex items-center text-xs md:text-sm text-gray-500 mt-1 md:mt-2">
            <Calendar size={12} className="mr-1 md:mr-2" />
            {trip.date}
          </div>

          <div className="flex justify-between items-center mt-2 md:mt-4 pt-2 md:pt-4 border-t">
            <div className="flex items-center text-xs md:text-sm text-gray-500">
              <Users size={12} className="mr-1 md:mr-2" />
              {trip.people}
            </div>

            <div className="text-[#ff7a5c] font-bold text-xs md:text-base">
              {trip.price}
              <span className="text-gray-400 font-normal"> /person</span>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

      <TopDestinations />
      <CallToAction />
      <Footer />
    </div>
  );
}
