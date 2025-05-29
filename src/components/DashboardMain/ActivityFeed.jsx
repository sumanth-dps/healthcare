const colors = [
  {
    color1: "bg-cyan-400",
    color2: "bg-gray-300",
    color3: "bg-gray-300",
    color4: "bg-gray-300",
    color5: "bg-cyan-400",
    color6: "bg-violet-900",
    color7: "bg-violet-900",
    color8: "bg-gray-300",
    color9: "bg-gray-300",
    color10: "bg-cyan-400",
  },
  {
    color1: "bg-gray-300",
    color2: "bg-cyan-400",
    color3: "bg-blue-900",
    color4: "bg-violet-900",
    color5: "bg-gray-300",
    color6: "bg-gray-300",
    color7: "bg-cyan-400",
    color8: "bg-cyan-400",
    color9: "bg-violet-900",
    color10: "bg-gray-300",
  },
  {
    color1: "bg-violet-900",
    color2: "bg-gray-300",
    color3: "bg-gray-300",
    color4: "bg-gray-300",
    color5: "bg-cyan-400",
    color6: "bg-violet-900",
    color7: "bg-cyan-400",
    color8: "bg-gray-300",
    color9: "bg-gray-300",
    color10: "bg-violet-900",
  },
  {
    color1: "bg-gray-300",
    color2: "bg-cyan-400",
    color3: "bg-violet-900",
    color4: "bg-violet-900",
    color5: "bg-gray-300",
    color6: "bg-gray-300",
    color7: "bg-cyan-400",
    color8: "bg-gray-300",
    color9: "bg-gray-300",
    color10: "bg-violet-900",
  },
];
const days = [
  { dayy: "Mon" },
  { dayy: "Tue" },
  { dayy: "Wed" },
  { dayy: "Thu" },
  { dayy: "Fri" },
  { dayy: "Sat" },
  { dayy: "Sun" },
];
const ActivityFeed = () => {
  return (
    <div className="rounded-2xl p-4 w-min mt-5 bg-violet-50 xl:w-full">
      <div className="flex justify-between items-center mb-4 gap-5 min-w-72">
        <h2 className="text-lg font-bold text-violet-900">Activity</h2>
        <span className="text-sm text-gray-400">
          3 appointment on this week
        </span>
      </div>
      <div className="xl:flex-col gap-2">
        <div className="flex flex-col xl:flex-row   gap-2 xl:gap-2.5 justify-between">
          {colors.map((color, index) => (
            <div
              className="flex flex-row gap-2 xl:gap-2.5 items-center justify-between"
              key={index}
            >
              <div className="bg-gray-300 h-20 w-1 rounded-full"></div>
              <div className={`${color.color1} h-10 w-1 rounded-full`}></div>
              <div className="flex flex-col gap-1">
                <div className="bg-violet-50 h-5 w-1 rounded-full"></div>
                <div className={` ${color.color2} h-5 w-1 rounded-full`}></div>
                <div className={` ${color.color3} h-5 w-1 rounded-full`}></div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-violet-50 h-6 w-1 rounded-full"></div>
                <div className="bg-violet-50 h-8 w-1 rounded-full"></div>
                <div className={` ${color.color4} h-6 w-1 rounded-full`}></div>
              </div>
              <div className="flex flex-col gap-1">
                <div className={` ${color.color5} h-9 w-1 rounded-full`}></div>
                <div className={` ${color.color6} h-10 w-1 rounded-full`}></div>
              </div>
              <div className={` ${color.color7} h-10 w-1 rounded-full`}></div>
              <div className="flex flex-col gap-1">
                <div className="bg-violet-50 h-5 w-1 rounded-full"></div>
                <div className={` ${color.color8} h-5 w-1 rounded-full`}></div>
                <div className={` ${color.color9} h-5 w-1 rounded-full`}></div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-violet-50 h-6 w-1 rounded-full"></div>
                <div className="bg-violet-50 h-8 w-1 rounded-full"></div>
                <div className={` ${color.color10} h-6 w-1 rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          {days.map((day, index) => (
            <div key={index}>{day.dayy}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;

