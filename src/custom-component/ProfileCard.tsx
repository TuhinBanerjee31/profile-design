import face from "../assets/face.jpeg"

const ProfileCard = () => {
  return (
    <div className='max-w-xs h-[45vh] md:h-[60vh] border-1 border-slate-200 rounded-lg shadow-lg bg-white md:ml-[4.5vw] relative top-[-10%] flex flex-col gap-0.5 justify-center items-center'>
      <div className="">
        <img src={face} className="w-30 h-30 rounded-lg" />
      </div>

      <h2 className="font-semibold text-3xl pt-2 pb-5">Levion Lex</h2>
      <h4 className="text-slate-500 tracking-wider">levion12@gmail.com</h4>
      <h4 className="text-slate-500 tracking-wider">9990004610</h4>
      <h4 className="text-slate-500 tracking-wider">Ontario, Canada</h4>
    </div>
  )
}

export default ProfileCard
