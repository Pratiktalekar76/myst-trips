import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      const snap = await getDoc(doc(db, "users", res.user.uid));

      if (snap.exists()) {
        const role = snap.data().role;

        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          placeholder="Email"
          className="text-black input mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="text-black input mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-[#ff7a5c] text-black py-3 rounded-lg font-semibold"
        >
          Login
        </button>

        <p className="text-black text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#ff7a5c] font-semibold">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
