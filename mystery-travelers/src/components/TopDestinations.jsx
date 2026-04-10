import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= DATA ================= */

const destinations = [
  { name: "Thailand", trips: "45 trips", img: "/images/trip-thailand.jpg" },
  { name: "Kokan", trips: "32 trips", img: "/images/trip-kokan.jpg" },
  { name: "Goa", trips: "28 trips", img: "/images/trip-goa.jpg" },
  { name: "Jaipur", trips: "38 trips", img: "/images/trip-jaipur.jpg" },
  { name: "Manali", trips: "21 trips", img: "/images/trip-manali.jpg" },
  { name: "Mahabaleshwar", trips: "25 trips", img: "/images/trip-mahabaleshwar.jpg" },
];

/* ================= COMPONENT ================= */

export default function TopDestinations() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="px-5 md:px-20 py-16 md:py-28 bg-white"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Top Destinations
        </h2>
        <p className="text-gray-500 mt-2 md:mt-3 text-sm md:text-base">
          Popular places our travelers love to explore
        </p>
      </div>

      {/* MOBILE → HORIZONTAL SCROLL */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-2">
        {destinations.map((item, index) => (
          <motion.div
            key={index}
            variants={cardAnim}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              navigate(`/trips?location=${encodeURIComponent(item.name)}`)
            }
            className="min-w-[220px] h-[260px] rounded-2xl overflow-hidden relative cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-base font-semibold">{item.name}</h3>
              <p className="text-xs opacity-90">{item.trips}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <motion.div
        className="hidden md:grid grid-cols-6 gap-8"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {destinations.map((item, index) => (
          <motion.div
            key={index}
            variants={cardAnim}
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              navigate(`/trips?location=${encodeURIComponent(item.name)}`)
            }
            className="relative h-[340px] rounded-3xl overflow-hidden cursor-pointer group"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-sm opacity-90">{item.trips}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}