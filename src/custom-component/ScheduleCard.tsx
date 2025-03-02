import {
  CalendarDays,
  ChevronDown,
  MoveLeft,
  MoveRight,
  Video,
} from "lucide-react";

const ScheduleCard = () => {
  const data = [
    {
      start: "10:30 AM",
      end: "11:30 AM",
      status: "Live",
      title: "UX Webinar",
    },
    {
      start: "11:45 AM",
      end: "12:45 PM",
      status: "Upcoming",
      title: "Data Structure & Algorithm",
    },
    {
      start: "1:00 PM",
      end: "2:00 PM",
      status: "Upcoming",
      title: "Operating System",
    },
    {
      start: "2:15 PM",
      end: "3:15 PM",
      status: "Upcoming",
      title: "System Design",
    },
    // {
    //   start: "3:30 PM",
    //   end: "4:30 PM",
    //   status: "Upcoming",
    //   title: "Soft Skills",
    // },
  ];

  return (
    <div className="w-full transition-colors duration-500">
      <div className="py-10">
        <h5 className="text-lg text-black dark:text-white">Friday, 28 February</h5>
        <h1 className="text-[#002A5A] text-3xl font-semibold">
          Good Morning, Levion!
        </h1>
      </div>

      <div className="w-[100%] min-h-[30vh] border-1 border-slate-200 bg-white dark:bg-black rounded-lg shadow-lg dark:shadow-slate-800 py-4">
        <div className="w-[95%] h-10 bg-[#F5F7F8] dark:bg-slate-900 mx-auto px-3 shadow border border-slate-100 rounded-md flex justify-between">
          <span className="h-full flex items-center gap-2">
            <CalendarDays className="text-black dark:text-white" />
            <p className="text-xs md:text-lg text-black dark:text-white">Friday, 28 February 2025</p>
            <ChevronDown size={14} className="text-black dark:text-white" />
          </span>

          <span className="h-full flex gap-5 items-center">
            <MoveLeft size={19} className="text-black dark:text-white" />
            <MoveRight size={19} className="text-black dark:text-white" />
          </span>
        </div>

        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center w-[100%] gap-3 mt-5 px-4">
              <span className="flex h-full w-[25%] sm:w-[20%] md:w-[15%] flex-col justify-center">
                <h3 className="text-xs sm:text-base font-semibold text-black dark:text-white">{item.start}</h3>
                <p className="text-xs text-black dark:text-white">to {item.end}</p>
              </span>

              <span className="h-[5vh] md:h-[6.5vh] border-2 border-[#40DFD0] rounded-full"></span>

              <span className="flex h-full w-[75%] sm:w-[80%] md:w-[85%] flex-col justify-center">
                <span className="flex items-center gap-1">
                  <p className="text-xs text-black dark:text-white">{item.status}</p>{" "}
                  <Video size={18} color={`${item.status == 'Live' ? 'red' : 'blue'}`} />
                </span>
                <h3 className="text-base md:text-xl font-semibold text-black dark:text-white">{item.title}</h3>
              </span>
            </div>

            {index != data.length-1 && <hr className="w-[95%] border-1 border-[#E0E0E0] mt-2 mx-auto" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
