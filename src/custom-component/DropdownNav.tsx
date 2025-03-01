import {
    AlignJustify,
    House,
    Presentation,
    ReceiptText,
    Users,
    Settings,
  } from "lucide-react";
  import { useState } from "react";

const DropdownNav = () => {
    const [open, setOpen] = useState(false);
    const [timer, setTimer] = useState(true);

    const handleCloseTimer = () => {
        setTimeout(() => {
            setTimer(!timer);
          }, 250);
    }
  
    const handleOpenTimer = () => {
      setTimeout(() => {
          setTimer(!timer);
        }, 150);
  } 

  return (
    <div className={`bg-white ${open ? 'w-md h-[55vh] sm:h-[60vh]' : 'w-8 h-7'} md:hidden rounded-r-full p-1 ease-in-out shadow-lg relative z-40 rounded-bl-full transition-all flex justify-center items-center duration-500`}>
      <div
        className={`${
          open ? "opacity-100" : "opacity-0"
        } ${timer ? 'hidden' : 'block'} transition-opacity w-xs duration-500 h-full flex flex-col items-center gap-4 justify-center`}
      >
        <div className={`w-[80%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Home</h4>
          <House />
        </div>

        <div className={`w-[80%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Webinars</h4>
          <Presentation />
        </div>

        <div className={`w-[80%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Billing</h4>
          <ReceiptText />
        </div>

        <div className={`w-[80%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Support</h4>
          <Users />
        </div>

        <div className={`w-[80%] flex justify-between bg-[#E4E9EE] p-2 rounded ${open ? 'cursor-pointer' : 'cursor-default'}`}>
          <h4>Settings</h4>
          <Settings />
        </div>
      </div>
      
      <div className={`h-full flex items-center`}>
      <AlignJustify size={20} className={`mx-auto cursor-pointer ${open ? 'rotate-90' : 'rotate-0'} transition-all duration-500`} onClick={() => {setOpen(!open); return open ? handleCloseTimer() : handleOpenTimer()}} />
      </div>
    </div>
  )
}

export default DropdownNav
