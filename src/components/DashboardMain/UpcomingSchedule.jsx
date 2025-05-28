import SimpleAppointmentCard from "./SimpleAppoinmentCard";

const appointmentsThu = [
  {
    title: "Health checkup complete",
    time: "11:00 AM",
    icon: "🧪",
  },
  { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
];
const appointmentsSat = [
  { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
  { title: "Neurologist", time: "16:00 PM", icon: "🧠" },
];

const UpcomingSchedule = () => {
  return (
    <div className="p-5 bg-violet-50">
      <h3 className="font-semibold  text-violet-950">The Upcoming Schedule</h3>
      <p className="text-gray-500 my-2">On Thursday</p>
      <div className="flex flex-row gap-5">
        {appointmentsThu.map((app, idx) => (
          <div className="flex flex-col">
            <SimpleAppointmentCard key={idx} {...app} />
          </div>
        ))}
      </div>
      <p className="text-gray-500 my-2">On Saturday</p>
      <div className="flex flex-row gap-5">
        {appointmentsSat.map((app, idx) => (
          <div className="flex flex-col">
            <SimpleAppointmentCard key={idx} {...app} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
