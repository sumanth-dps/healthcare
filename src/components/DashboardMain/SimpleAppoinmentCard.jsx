const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="bg-violet-200 text-violet-950 rounded-2xl p-4 text-sm flex flex-col  justify-between">
      <div className="flex flex-row items-center justify-between gap-8">
        <span className="font-semibold">{title}</span>
        <span>{icon}</span>
      </div>
      <span>{time}</span>
    </div>
  );
};

export default SimpleAppointmentCard;
