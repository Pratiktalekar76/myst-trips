import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const MyTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchMyTrips = async () => {
      if (!auth.currentUser) return;

      const q = query(
  collection(db, "joinRequests"),
  where("userId", "==", auth.currentUser.uid),
  where("status", "==", "approved")
);

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTrips(data);
    };

    fetchMyTrips();
  }, []);

  return (
    <div className="pt-32 max-w-5xl mx-auto px-6">

      <h1 className="text-3xl font-bold mb-6">
        My Trips
      </h1>

      {trips.length === 0 && (
        <p>No trips joined yet</p>
      )}

      {trips.map((t, index) => (
        <div
          key={t.id}
          className="bg-white text-black p-4 rounded-lg mb-4 flex justify-between"
        >
          <div>
            <p><b>{index + 1}. {t.tripTitle}</b></p>
            <p>Status: {t.status}</p>
          </div>

          <span
            className={
              t.status === "approved"
                ? "text-green-600"
                : t.status === "rejected"
                ? "text-red-600"
                : "text-orange-500"
            }
          >
            {t.status}
          </span>
        </div>
      ))}

    </div>
  );
};

export default MyTrips;
