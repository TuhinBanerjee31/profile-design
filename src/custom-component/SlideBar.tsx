import {
  AlignJustify,
  House,
  Presentation,
  ReceiptText,
  Users,
  Settings,
  UserPen,
} from "lucide-react";
import { useState } from "react";

const SlideBar = () => {
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(true);

  const handleCloseTimer = () => {
      setTimeout(() => {
          setTimer(!timer);
        }, 300);
  }

  const handleOpenTimer = () => {
    setTimeout(() => {
        setTimer(!timer);
      }, 10);
} 
  return (
    <div
      className={`${
        open ? "w-[20vw]" : "w-[3vw]"
      } h-screen bg-[#FEFEFE] shadow-xl transition-all hidden lg:block duration-500 absolute z-40 overflow-hidden`}
    >
      <div className="flex items-center justify-between m-2">
        <UserPen className={`${open ? 'opacity-100' : 'opacity-0'} ${!timer ? 'block' : 'hidden'} transition-opacity`} />
        <AlignJustify
          size={36}
          className={`${
            open ? "rotate-90" : "rotate-0"
          } transition-all cursor-pointer duration-500`}
          onClick={() => {setOpen(!open); return open ? handleCloseTimer() : handleOpenTimer()}}
        />
      </div>

      <div
        className={`${
          open ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 h-full flex flex-col items-center gap-4 justify-center`}
      >
        <div className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Home</h4>
          <House />
        </div>

        <div className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Webinars</h4>
          <Presentation />
        </div>

        <div className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Billing</h4>
          <ReceiptText />
        </div>

        <div className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Support</h4>
          <Users />
        </div>

        <div className={`w-[85%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Settings</h4>
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
