import { CassetteTape, Book, Newspaper, Layers } from "lucide-react";

const FeatureCard = () => {
  return (
    <div className='w-[90%] min-h-[40vh] py-10 border-1 mx-auto border-slate-200 duration-500 transition-colors bg-white dark:bg-black dark:shadow-slate-800 rounded-lg shadow-lg lg:mt-[20vh] grid grid-cols-4 gap-8'>
      <div className=" flex flex-col items-center col-span-2 cursor-pointer">
        <div className='w-16 bg-[#3FE0CF] p-5 rounded-lg'>
        <CassetteTape />
        </div>

        <p className="text-base font-semibold text-black dark:text-white">Class Recordings</p>
      </div>

      <div className=" flex flex-col items-center col-span-2 cursor-pointer">
        <div className='w-16 bg-[#3FE0CF] p-5 rounded-lg'>
        <Book />
        </div>

        <p className="text-base font-semibold text-black dark:text-white">Study Materials</p>
      </div>

      <div className=" flex flex-col items-center col-span-2 cursor-pointer">
        <div className='w-16 bg-[#3FE0CF] p-5 rounded-lg'>
        <Newspaper />
        </div>

        <p className="text-base font-semibold text-black dark:text-white">Notice Board</p>
      </div>

      <div className=" flex flex-col items-center col-span-2 cursor-pointer">
        <div className='w-16 bg-[#3FE0CF] p-5 rounded-lg'>
        <Layers />
        </div>

        <p className="text-base font-semibold text-black dark:text-white">Assignments</p>
      </div>
    </div>
  )
}

export default FeatureCard
