import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";

const AdminDashboard = () => {

  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    const snap = await getDocs(collection(db, "joinRequests"));
    const list = snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));
    setRequests(list);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const approveRequest = async (id) => {
    await updateDoc(doc(db, "joinRequests", id), {
      status: "approved"
    });
    fetchRequests();
  };

  const rejectRequest = async (id) => {
    await updateDoc(doc(db, "joinRequests", id), {
      status: "rejected"
    });
    fetchRequests();
  };

  return (
    <div className="text-black min-h-screen pt-24 sm:pt-28 px-4 sm:px-8 bg-orange-100">

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Admin Dashboard
      </h1>

      {/* 👇 table wrapper for mobile scroll */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full min-w-[600px]">
          <thead className="bg-blue-200">
            <tr>
              <th className="p-2 sm:p-3 text-left text-sm sm:text-base">User</th>
              <th className="p-2 sm:p-3 text-left text-sm sm:text-base">Trip</th>
              <th className="p-2 sm:p-3 text-left text-sm sm:text-base">Message</th>
              <th className="p-2 sm:p-3 text-left text-sm sm:text-base">Status</th>
              <th className="p-2 sm:p-3 text-left text-sm sm:text-base">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((r) => (
              <tr key={r.id} className="border-b">

                <td className="p-2 sm:p-3 text-sm">{r.userEmail}</td>
                <td className="p-2 sm:p-3 text-sm">{r.tripTitle}</td>
                <td className="p-2 sm:p-3 text-sm">{r.message}</td>

                <td className="p-2 sm:p-3 font-semibold text-sm">
                  {r.status}
                </td>

                <td className="p-2 sm:p-3 space-x-2">

                  {r.status === "pending" && (
                    <>
                      <button
                        onClick={() => approveRequest(r.id)}
                        className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => rejectRequest(r.id)}
                        className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm"
                      >
                        Reject
                      </button>
                    </>
                  )}

                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
};

export default AdminDashboard;