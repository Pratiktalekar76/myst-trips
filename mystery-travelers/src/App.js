import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";

import Home from "./pages/Home";
import Trips from "./pages/Trips";
import MeetTravelers from "./pages/MeetTravelers";
import Hotels from "./pages/Hotels";
import Cabs from "./pages/Cabs";
import CreateTrip from "./pages/CreateTrip";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyTrips from "./pages/MyTrips";
import TripDetails from "./pages/TripDetails";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import HotelDetails from "./pages/HotelDetails";
import CabDetails from "./pages/CabDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#050b14] text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/trips/:id" element={<TripDetails />} />
          <Route path="/meet-travelers" element={<MeetTravelers />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cabs" element={<Cabs />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/cab/:id" element={<CabDetails />} />

          {/* ✅ ADMIN PROTECTED */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
