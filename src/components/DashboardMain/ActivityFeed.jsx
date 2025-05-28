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

const ActivityFeed = () => {
  return (
    <div className="rounded-2xl p-4 w-min mt-5 bg-violet-50">
      <div className="flex justify-between items-center mb-4 gap-5 min-w-72">
        <h2 className="text-lg font-bold text-violet-900">Activity</h2>
        <span className="text-sm text-gray-400">
          3 appointment on this week
        </span>
      </div>
      <div className="flex flex-col xl:flex-row  gap-2">
        {colors.map((color, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
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
    </div>
  );
};

export default ActivityFeed;
{
  /* <div className="rounded-2xl p-4 w-full mt-5 bg-[#F7F9FC]">
      <div className="p-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#1D1D1F]">Activity</h2>
          <span className="text-sm text-gray-400">
            3 appointment on this week
          </span>
        </div>
        <div className="flex justify-between items-end gap-2">
          {activityData.map((bars, dayIdx) => (
            <div key={dayIdx} className="flex flex-col items-center gap-1">
              <div className="flex flex-col justify-end h-24 gap-1">
                {bars.map((color, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full"
                    style={{
                      height: `${(i + 1) * 10}px`,
                      backgroundColor: color,
                    }}
                  ></div>
                ))}
              </div>
              <span className="text-xs text-gray-500">{days[dayIdx]}</span>
            </div>
          ))}
        </div>
      </div>
    </div> */
}
