import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";

const CalendarView = () => {
  const table = [
    {
      id: 1,
      day: "Mon",
      date: "25",
      time1: "10:00",
      time2: "11:00",
      time3: "12:00",
    },
    {
      id: 2,
      day: "Tues",
      date: "26",
      time1: "08:00",
      time2: "09:00",
      time3: "10:00",
    },
    {
      id: 3,
      day: "Wed",
      date: "27",
      time1: "12:00",
      time2: "-",
      time3: "13:00",
    },
    {
      id: 4,
      day: "Thurs",
      date: "28",
      time1: "10:00",
      time2: "11:00",
      time3: "-",
    },
    {
      id: 5,
      day: "Fri",
      date: "29",
      time1: "-",
      time2: "14:00",
      time3: "16:00",
    },
    {
      id: 6,
      day: "Sat",
      date: "30",
      time1: "12:00",
      time2: "14:00",
      time3: "16:00",
    },
    {
      id: 7,
      day: "Sun",
      date: "31",
      time1: "09:00",
      time2: "10:00",
      time3: "11:00",
    },
  ];
  return (
    <div className="bg-gray-100  p-3 pb-2">
      <div className="flex flex-row items-center justify-between p-3 text-violet-900">
        <h2 className="font-bold ">October 2021</h2>
        <div className="flex flex-row items-center justify-between">
          <BiSolidLeftArrowAlt size={24} />
          <BiSolidRightArrowAlt size={24} />
        </div>
      </div>

      <div className=" grid grid-cols-7 gap-2 text-center ">
        {table.map((item, index) => (
          <div
            key={index}
            className={` flex flex-col items-center justify-center gap-3 text-xs font-medium  p-2 pt-4 rounded-lg ${
              item.id === 2 ? "bg-gray-200" : ""
            } ${item.id === 7 ? "text-gray-500" : "text-violet-900"}
             `}
          >
            <div>{item.day}</div>
            <div className="text-lg font-semibold">{item.date}</div>
            <div
              className={` ${
                item.id === 6 || item.id === 7
                  ? " text-white bg-violet-300 rounded-lg"
                  : "text-violet-900"
              } p-1 md:p-2  lg:px-3`}
            >
              {item.time1}
            </div>
            <div
              className={`${
                item.time2 === "09:00"
                  ? "bg-violet-900 text-white"
                  : item.id === 4 && item.time2 === "11:00"
                  ? "bg-violet-300 text-white"
                  : ""
              } p-1 md:p-2  lg:px-3 rounded-lg`}
            >
              {item.time2}
            </div>
            <div>{item.time3}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-flow-col  gap-4 text-sm mt-4">
        <div className=" bg-violet-900 text-white p-3 px-5 rounded-2xl">
          <div className="flex flex-row items-center justify-between">
            <p> Dentist</p>
            <p className="text-xl">🦷</p>
          </div>
          <p>09:00 - 11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>
        <div className="col-span-3 bg-violet-300 text-violet-950 p-3 px-5 mr-5 rounded-2xl">
          <div className="flex flex-row items-center justify-between">
            <p className="font-semibold"> Physiotherapy Appoinment</p>
            <p className="text-xl">💪🏻</p>
          </div>
          <p> 11:00 - 12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
