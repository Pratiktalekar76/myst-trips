import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Trips = () => {
  const [search, setSearch] = useState("");
  const [trips, setTrips] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 URL se destination read karo (?location=Thailand)
  const queryParams = new URLSearchParams(location.search);
  const selectedDestination = queryParams.get("location");

  // 🔹 TEMP DATA
  useEffect(() => {
    setTrips([
      {
        id: "mahabaleshwar",
        title: "Mahabaleshwar Escape",
        destination: "Mahabaleshwar",
        country: "India",
        price: 8500,
        image: "/images/trip-mahabaleshwar.jpg",
      },
      {
        id: "goa",
        title: "Goa Beach Fun",
        destination: "Goa",
        country: "India",
        price: 12000,
        image: "/images/trip-goa.jpg",
      },
      {
        id: "manali",
        title: "Manali Adventure",
        destination: "Manali",
        country: "India",
        price: 25000,
        image: "/images/trip-manali.jpg",
      },
      {
        id: "jaipur",
        title: "Jaipur Palace",
        destination: "Jaipur",
        country: "India",
        price: 30000,
        image: "/images/trip-jaipur.jpg",
      },
      {
        id: "kerala",
        title: "Kerala Natures",
        destination: "Kerala",
        country: "India",
        price: 25000,
        image: "/images/trip-kerla.jpg",
      },
      {
        id: "kokan",
        title: "Kokan WaterSports",
        destination: "Kokan",
        country: "India",
        price: 13000,
        image: "/images/trip-kokan.jpg",
      },
      {
        id: "thailand",
        title: "Thailand Trip",
        destination: "Thailand",
        country: "Thailand",
        price: 205000,
        image: "/images/trip-thailand.jpg",
      },
    ]);
  }, []);

  // 🔍 COMBINED FILTER
  const filteredTrips = trips.filter((trip) => {
    const matchesSearch = `${trip.title} ${trip.destination} ${trip.country}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDestination = selectedDestination
      ? trip.destination
          .toLowerCase()
          .includes(selectedDestination.toLowerCase())
      : true;

    return matchesSearch && matchesDestination;
  });

  return (
    <div className="pt-24 md:pt-32 px-4 md:px-8 max-w-7xl mx-auto">
      
      <h1 className="text-2xl md:text-4xl font-bold text-white">
        Explore Trips
      </h1>

      {/* SEARCH BAR */}
      <div className="mt-6 md:mt-10 flex items-center gap-4">
        <div className="flex items-center bg-white shadow rounded-xl px-4 md:px-5 py-3 md:py-4 w-full max-w-xl">
          <Search className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search destinations, trips..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none w-full text-gray-700 text-sm md:text-base"
          />
        </div>
      </div>

      {/* TRIPS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-14">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => (
            <div
              key={trip.id}
              onClick={() => navigate(`/trips/${trip.id}`)}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="h-36 md:h-52 w-full object-cover"
              />

              <div className="p-3 md:p-5 text-gray-800">
                <h3 className="text-sm md:text-lg font-semibold">
                  {trip.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">
                  {trip.destination}, {trip.country}
                </p>

                <p className="mt-2 md:mt-3 font-bold text-[#ff7a5c] text-sm md:text-base">
                  ₹ {trip.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-10">❌ No trips found</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Trips;