import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        email: email,
        role: email === "pratiktalekar930@gmail.com" ? "admin" : "user",
        createdAt: new Date()
      });

      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="pt-32 flex justify-center">
      <div className="bg-white p-8 rounded-xl w-96">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input
          placeholder="Email"
          className="text-black input mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="text-black input mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="w-full bg-[#ff7a5c] text-white py-2 rounded"
        >
          Signup
        </button>

        <p className="text-black text-sm text-center mt-4">
          Allready have an account?{" "}
          <Link to="/login" className="text-[#ff7a5c] font-semibold">
            Login
          </Link>
          </p>
      </div>
    </div>
  );
};

export default Signup;
