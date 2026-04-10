import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#0f172a] text-gray-300 px-5 md:px-20 py-10 md:py-16"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* TOP LOGO SECTION */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 mb-3 md:mb-4 text-white">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-[#ff7a5c] rounded-full flex items-center justify-center">
            <span>🧭</span>
          </div>
          Mystery Travellers
        </h2>

        <p className="text-gray-400 text-xs md:text-sm max-w-md">
          Connect with fellow adventurers and discover amazing journeys together.
          Travel with friends you haven't met yet.
        </p>
      </div>

      {/* LINKS ROW */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-10 mb-10 md:mb-12">

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">Explore</h3>
          <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs md:text-sm">

            <li><Link to="/trips" className="hover:text-white">All Trips</Link></li>

            <li><Link to="/meet-travelers" className="hover:text-white">Meet Travelers</Link></li>

            <li><Link to="/hotels" className="hover:text-white">Hotels</Link></li>

            <li><Link to="/cabs" className="hover:text-white">Cabs</Link></li>

          </ul>
        </div>

        {/* Host */}
        <div>
          <h3 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">Host</h3>
          <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs md:text-sm">

            <li><Link to="/create-trip" className="hover:text-white">Create a Trip</Link></li>

            <li><Link to="/my-trips" className="hover:text-white">My Trips</Link></li>

          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">Support</h3>
          <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs md:text-sm">
            <li>Help Center</li>
            <li>Safety</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 pt-5 md:pt-6 text-center text-gray-500 text-xs md:text-sm">
        © 2024 Mystery Travellers. All rights reserved.
      </div>
    </motion.footer>
  );
}