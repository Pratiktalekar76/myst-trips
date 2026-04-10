import { motion } from "framer-motion";
import { Compass, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardLeft = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardRight = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="px-4 md:px-20 py-10 md:py-28 bg-white"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* ALWAYS 2 COLUMNS */}
      <div className="grid grid-cols-2 gap-3 md:gap-12">

        {/* LEFT */}
        <motion.div
          variants={cardLeft}
          whileHover={{ y: -6 }}
          className="rounded-2xl md:rounded-3xl p-4 md:p-14 text-white"
          style={{ background: "linear-gradient(135deg, #ff7a5c, #ff9a76)" }}
        >
          <div className="w-9 h-9 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center mb-3 md:mb-8">
            <Compass size={18} />
          </div>

          <h3 className="text-sm md:text-4xl font-bold mb-1 md:mb-4 leading-tight">
            Create Trip
          </h3>

          <p className="opacity-90 text-[11px] md:text-lg hidden md:block">
            Create your own trip and let others join.
          </p>

          <button
            onClick={() => navigate("/create-trip")}
            className="mt-3 md:mt-10 bg-white text-[#ff7a5c] px-3 md:px-8 py-1.5 md:py-4 rounded-full font-semibold text-[11px] md:text-base"
          >
            Start →
          </button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={cardRight}
          whileHover={{ y: -6 }}
          className="rounded-2xl md:rounded-3xl p-4 md:p-14 text-white"
          style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
        >
          <div className="w-9 h-9 md:w-14 md:h-14 bg-white/10 rounded-xl flex items-center justify-center mb-3 md:mb-8">
            <Users size={18} />
          </div>

          <h3 className="text-sm md:text-4xl font-bold mb-1 md:mb-4 leading-tight">
            Meet Travelers
          </h3>

          <p className="opacity-80 text-[11px] md:text-lg hidden md:block">
            Connect with travel buddies.
          </p>

          <button
            onClick={() => navigate("/community")}
            className="mt-3 md:mt-10 bg-gradient-to-r from-[#ff7a5c] to-[#ff9a76] px-3 md:px-8 py-1.5 md:py-4 rounded-full font-semibold text-[11px] md:text-base"
          >
            Explore →
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
}