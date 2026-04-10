import TravelerCard from "../components/TravelerCard";

const MeetTravelers = () => {
  return (
    <div className="min-h-screen bg-black pt-32 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        Meet Travelers
      </h1>

      <div className="flex justify-center">
        <TravelerCard />
      </div>
    </div>
  );
};

export default MeetTravelers;