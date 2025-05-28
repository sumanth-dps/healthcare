import { ArrowRight } from "lucide-react";

const mockData = [
  {
    title: "Lungs",
    date: "26 Okt 2021",
    status: "Bad",
    color: "bg-red-600",
    img: "🫁",
  },
  {
    title: "Teeth",
    date: "26 Okt 2021",
    status: "Good",
    color: "bg-green-500",
    img: "🦷",
  },
  {
    title: "Bone",
    date: "26 Okt 2021",
    status: "Weak",
    color: "bg-orange-600",
    img: "🦴",
  },
];

const HealthStatusCards = () => {
  return (
    <div className="flex flex-col justify-between gap-3  ">
      {mockData.map((item, idx) => (
        <div
          key={idx}
          className="relative z-10  bg-gray-100 rounded-2xl shadow p-2 max-w-45 "
        >
          <div className="flex flex-row md:flex-col lg:flex-row items-center gap-5 p-2">
            <p className="text-4xl">{item.img}</p>
            <h3 className="font-semibold text-lg text-violet-950">
              {item.title}
            </h3>
          </div>
          <p className="text-sm text-gray-400">Date: {item.date}</p>
          <div className={` w-full h-2 mt-2  rounded-full bg-gray-400`}></div>
          <div
            className={`absolute z-9 bottom-2 w-3/5 h-2 mt-2 rounded-full ${item.color}`}
          ></div>
        </div>
      ))}
      <div className="flex flex-row items-start justify-end gap-2  text-xs text-violet-900  ">
        <p>Details</p>
        <ArrowRight size={15} />
      </div>
    </div>
  );
};

export default HealthStatusCards;
