import {
  AlignJustify,
  House,
  Presentation,
  ReceiptText,
  Users,
  Settings,
  UserPen,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect } from "react";

const SlideBar = () => {
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(true);
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    setTheme(document.querySelector("html")?.classList[0] || "");
  },[])

  const handleCloseTimer = () => {
    setTimeout(() => {
      setTimer(!timer);
    }, 300);
  };

  const handleOpenTimer = () => {
    setTimeout(() => {
      setTimer(!timer);
    }, 10);
  };

  const handleTheme = () => {
    document.querySelector("html")?.classList.toggle("dark");
    setTheme(document.querySelector("html")?.classList[0] || "");
  }
  return (
    <div
      className={`${
        open ? "w-[20vw]" : "w-[3vw]"
      } min-h-screen bg-[#FEFEFE] dark:bg-black shadow-xl dark:shadow-slate-800 transition-all hidden md:flex flex-col justify-between duration-500 absolute z-40 overflow-hidden`}
    >
      <div className="flex items-center justify-between m-2">
        <UserPen
          className={`${open ? "opacity-100" : "opacity-0"} ${
            !timer ? "block" : "hidden"
          } transition-opacity text-black dark:text-white`}
        />
        <AlignJustify
          size={36}
          className={`${
            open ? "rotate-90" : "rotate-0"
          } transition-all cursor-pointer duration-500 text-black dark:text-white`}
          onClick={() => {
            setOpen(!open);
            return open ? handleCloseTimer() : handleOpenTimer();
          }}
        />
      </div>

      <div
        className={`${
          open ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 h-full flex flex-col items-center gap-4 justify-center`}
      >
        <div
          className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${
            open ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <h4>Home</h4>
          <House />
        </div>

        <div
          className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${
            open ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <h4>Webinars</h4>
          <Presentation />
        </div>

        <div
          className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${
            open ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <h4>Billing</h4>
          <ReceiptText />
        </div>

        <div
          className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${
            open ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <h4>Support</h4>
          <Users />
        </div>

        <div
          className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${
            open ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <h4>Settings</h4>
          <Settings />
        </div>
      </div>

      <div className="flex justify-center px-2 pb-10">
        {theme == "dark" ? (
          <Sun
            size={36}
            className={`${
              theme == "dark" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
            } transition-all cursor-pointer duration-500 flex text-black dark:text-white justify-end items-end`}
            onClick={() => {
              handleTheme()
            }}
          />
        ) : (
          <Moon
            size={36}
            className={`${
              !theme ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
            } transition-all cursor-pointer duration-500 flex text-black dark:text-white justify-end items-end`}
            onClick={() => {
             handleTheme()
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SlideBar;
