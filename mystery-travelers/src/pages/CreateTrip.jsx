import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const steps = ["Basic Info", "Details", "Itinerary", "Review"];

const CreateTrip = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [itinerary, setItinerary] = useState([""]);

  const addDay = () => setItinerary([...itinerary, ""]);

  const updateDay = (i, val) => {
    const copy = [...itinerary];
    copy[i] = val;
    setItinerary(copy);
  };

  const canGoNext = () => {
    if (step === 0)
      return title && destination && country && startDate && endDate;
    if (step === 1) return description;
    if (step === 2) return itinerary.every(d => d.trim() !== "");
    return true;
  };

  const publishTrip = async () => {
    await addDoc(collection(db, "trips"), {
      title,
      destination,
      country,
      startDate,
      endDate,
      price: Number(price),
      description,
      highlights,
      itinerary,
      createdBy: auth.currentUser?.uid || "demo",
      createdAt: serverTimestamp(),
      published: true,
    });

    alert("Trip Published 🚀");
    navigate("/trips");
  };

  return (
    <div className="min-h-screen pt-32 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow p-8">

          {step === 0 && (
            <>
              <h2 className="text-black text-xl font-bold mb-6">
                Basic Info
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input className="input text-black" placeholder="Title"
                  value={title} onChange={e=>setTitle(e.target.value)} />
                <input className="input text-black" placeholder="Destination"
                  value={destination} onChange={e=>setDestination(e.target.value)} />
                <input className="input text-black" placeholder="Country"
                  value={country} onChange={e=>setCountry(e.target.value)} />
                <input type="date" className="input text-black"
                  value={startDate} onChange={e=>setStartDate(e.target.value)} />
                <input type="date" className="input text-black"
                  value={endDate} onChange={e=>setEndDate(e.target.value)} />
                <input type="number" className="input text-black"
                  placeholder="Price"
                  value={price} onChange={e=>setPrice(e.target.value)} />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h2 className="text-black text-xl font-bold mb-6">Details</h2>
              <textarea className="w-full border rounded-lg p-3 mb-4 text-black"
                rows="4" placeholder="Description"
                value={description}
                onChange={e=>setDescription(e.target.value)} />
              <textarea className="w-full border rounded-lg p-3 text-black"
                rows="3" placeholder="Highlights"
                value={highlights}
                onChange={e=>setHighlights(e.target.value)} />
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-black text-xl font-bold mb-6">Itinerary</h2>
              {itinerary.map((d,i)=>(
                <textarea key={i}
                  className="w-full border rounded-lg p-3 mb-3 text-black"
                  rows="3" placeholder={`Day ${i+1}`}
                  value={d}
                  onChange={e=>updateDay(i,e.target.value)} />
              ))}
              <button onClick={addDay} className="text-[#ff7a5c] font-semibold">
                + Add Day
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-black text-xl font-bold mb-6">Review</h2>
              <p className="text-black">{title} — {destination}</p>
              <button onClick={publishTrip}
                className="mt-6 bg-[#ff7a5c] text-white px-8 py-3 rounded-lg">
                Publish Trip
              </button>
            </>
          )}

          <div className="flex justify-between mt-10">
            <button disabled={step===0}
              onClick={()=>setStep(s=>s-1)}
              className="px-6 py-2 bg-gray-300 rounded">
              Back
            </button>

            <button disabled={!canGoNext()}
              onClick={()=>setStep(s=>s+1)}
              className="px-6 py-2 bg-[#ff7a5c] text-white rounded">
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
