import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Navbar = () => {

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);

      if (u) {
        const snap = await getDoc(doc(db, "users", u.uid));
        setRole(snap.data()?.role);
      }
    });

    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-[#ff6a5b] to-[#ff8a75]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 text-white">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
              🌍 <b>Mystery Travellers</b>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex gap-8">
              <Link to="/trips">Explore Trips</Link>
              <Link to="/meet-travelers">Meet Travelers</Link>
              <Link to="/hotels">Hotels</Link>
              <Link to="/cabs">Cabs</Link>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>

            {/* RIGHT SIDE DESKTOP */}
            <div className="hidden md:block">
              {!user && <Link to="/login">Login</Link>}

              {user && (
                <div className="relative">
                  <button
                    onClick={() => setOpen(!open)}
                    className="bg-white text-black px-4 py-2 rounded-full flex gap-2"
                  >
                    {user.email}
                    <ChevronDown size={16} />
                  </button>

                  {open && (
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow">

                      {role === "admin" && (
                        <>
                          <Link to="/admin" className="text-black block px-4 py-3 hover:bg-gray-100">
                            Admin Dashboard
                          </Link>
                          <Link to="/create-trip" className="text-black block px-4 py-3 hover:bg-gray-100">
                            Create Trip
                          </Link>
                        </>
                      )}

                      {role !== "admin" && (
                        <Link to="/my-trips" className="text-black block px-4 py-3 hover:bg-gray-100">
                          My Trips
                        </Link>
                      )}

                      <button
                        onClick={logout}
                        className="text-black w-full text-left px-4 py-3 text-red-500 hover:bg-gray-100"
                      >
                        Logout
                      </button>

                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* MOBILE MENU DROPDOWN */}
          {mobileMenu && (
            <div className="md:hidden pb-4 flex flex-col gap-3 text-white">

              <Link to="/trips" onClick={()=>setMobileMenu(false)}>Explore Trips</Link>
              <Link to="/meet-travelers" onClick={()=>setMobileMenu(false)}>Meet Travelers</Link>
              <Link to="/hotels" onClick={()=>setMobileMenu(false)}>Hotels</Link>
              <Link to="/cabs" onClick={()=>setMobileMenu(false)}>Cabs</Link>

              {!user && <Link to="/login">Login</Link>}

              {user && (
                <>
                  {role === "admin" && (
                    <>
                      <Link to="/admin">Admin Dashboard</Link>
                      <Link to="/create-trip">Create Trip</Link>
                    </>
                  )}

                  {role !== "admin" && <Link to="/my-trips">My Trips</Link>}

                  <button onClick={logout} className="text-red-200 text-left">
                    Logout
                  </button>
                </>
              )}
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Navbar;