import { Star, MapPin, Globe, Briefcase } from "lucide-react";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const travelers = [
  {
    name: "Sofia Rodriguez",
    location: "Barcelona, Spain",
    rating: "4.95",
    bio: "Travel blogger and foodie! I document my culinary adventures around the world. Currently obsessed with Southeast Asian cuisine. Let's explore together!",
    tags: ["Cultural", "Budget", "Group"],
    countries: 28,
    trips: 15,
    languages: "Spanish, English, Portuguese",
  },
  {
    name: "Alex Chen",
    location: "Singapore",
    rating: "4.9",
    bio: "Backpacker & photographer. Sunrise chaser and mountain lover.",
    tags: ["Adventure", "Solo", "Nature"],
    countries: 22,
    trips: 12,
    languages: "English, Mandarin",
  },
  {
    name: "Emma Watson",
    location: "London, UK",
    rating: "4.8",
    bio: "Luxury & cultural travel enthusiast. Museums + cafes = happiness.",
    tags: ["Luxury", "Culture"],
    countries: 30,
    trips: 18,
    languages: "English, French",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai, India",
    rating: "4.7",
    bio: "Weekend traveler & road trip planner. Budget friendly trips only!",
    tags: ["Budget", "Roadtrip"],
    countries: 12,
    trips: 9,
    languages: "Hindi, English",
  },
  {
    name: "Luca Romano",
    location: "Rome, Italy",
    rating: "4.85",
    bio: "History geek who loves walking tours and street food.",
    tags: ["Cultural", "Food"],
    countries: 26,
    trips: 14,
    languages: "Italian, English",
  },
  {
    name: "Aisha Khan",
    location: "Dubai, UAE",
    rating: "4.9",
    bio: "Luxury desert trips & international travel planner.",
    tags: ["Luxury", "Group"],
    countries: 20,
    trips: 11,
    languages: "Arabic, English",
  },
];

const Travelers = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 md:pt-32 px-4 md:px-6">
      
      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {travelers.map((t, i) => (
          <div
            key={i}
            className="bg-black rounded-2xl shadow-md md:shadow-lg p-5 md:p-6 hover:shadow-xl transition"
          >
            {/* TOP */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center text-white text-lg md:text-xl font-bold">
                {t.name.charAt(0)}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-base md:text-lg">{t.name}</h3>
                  <span className="text-[10px] md:text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>

                <p className="flex items-center gap-1 text-xs md:text-sm text-gray-500 mt-1">
                  <MapPin size={14} /> {t.location}
                </p>

                <p className="flex items-center gap-1 text-xs md:text-sm mt-1">
                  <Star size={14} className="text-yellow-400" />
                  {t.rating} rating
                </p>
              </div>
            </div>

            {/* BIO */}
            <p className="text-gray-600 text-xs md:text-sm mt-3 md:mt-4 leading-relaxed">
              {t.bio}
            </p>

            {/* TAGS */}
            <div className="flex gap-2 flex-wrap mt-3 md:mt-4">
              {t.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 md:px-3 py-1 bg-gray-100 rounded-full text-[10px] md:text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* STATS */}
            <div className="flex justify-between mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Globe size={14} /> {t.countries} countries
              </span>
              <span className="flex items-center gap-1">
                <Briefcase size={14} /> {t.trips} trips
              </span>
            </div>

            {/* LANG */}
            <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3">
              Speaks: {t.languages}
            </p>

            {/* BUTTON */}
            <button className="mt-4 md:mt-5 w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base flex items-center justify-center gap-2 hover:opacity-90">
              💬 Connect
            </button>
          </div>
        ))}
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Travelers;