import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

const JoinTripModal = ({ trip, onClose }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendRequest = async () => {
    if (!auth.currentUser) {
      alert("Please login first");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "joinRequests"), {
        tripId: trip.id,
        tripTitle: trip.title,
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        message: message,
        status: "pending",
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setLoading(false);
    } catch (error) {
      console.error("Firestore Error:", error);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 p-3">

      <div className="bg-white w-full sm:w-[420px] rounded-2xl sm:rounded-xl p-5 sm:p-6 relative shadow-xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-lg sm:text-xl"
        >
          ✖
        </button>

        <h2 className="text-base sm:text-lg font-semibold">
          Request to Join Trip
        </h2>

        {success ? (
          <p className="text-green-600 mt-5 sm:mt-6 text-sm sm:text-base">
            ✅ Request sent successfully
          </p>
        ) : (
          <>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">
              Message to Host (Optional)
            </p>

            <textarea
              className="text-black w-full border rounded-lg p-3 mt-2 text-sm"
              rows="4"
              placeholder="Introduce yourself..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={sendRequest}
              disabled={loading}
              className="mt-4 w-full bg-[#ff7a5c] text-white py-2.5 rounded-lg text-sm sm:text-base"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default JoinTripModal;