import { ChevronDown } from "lucide-react";
import { FaSearchPlus } from "react-icons/fa";
import HealthStatusCards from "./HealthStatusCards";
const AnatomySection = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center mb-3">
        <p className="text-violet-900 text-xl font-bold">Dashboard</p>
        <div className="flex flex-row gap-2 items-center text-violet-900 text-sm ">
          <p>This Week</p>
          <ChevronDown size={15} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div className="relative z-2  rounded-2xl shadow p-2">
          <img src="/anatomy.jpg" alt="Anatomy" className="h-80 object-cover" />
          <div className="absolute -right-6 top-2/7 z-10 text-sm bg-violet-900 text-white rounded-lg px-3 py-2">
            ❤️ Healthy Heart
          </div>
          <div className="absolute -left-5 top-4/7 z-10 text-sm bg-cyan-400 text-blue-600 rounded-lg px-3 py-2">
            🦵 Healthy Leg
          </div>

          <FaSearchPlus
            size={20}
            className="absolute top-4 right-4 z-10 text-gray-500"
          />
        </div>
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default AnatomySection;
