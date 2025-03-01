import './App.css'
import SlideBar from './custom-component/SlideBar'
import image1 from './assets/image1.jpeg'
import ProfileCard from './custom-component/ProfileCard'
import ScheduleCard from './custom-component/ScheduleCard'
import FeatureCard from './custom-component/FeatureCard'
import DropdownNav from './custom-component/DropdownNav'

function App() {

  return (
    <>
      <SlideBar />
      <div className='max-w-screen min-h-screen overflow-hidden'>
        <div className='w-[100vw] h-[20vh] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image1})`}}>
          <DropdownNav />
        </div>
        <div className='grid grid-cols-12 gap-5 ml-3'>
        <div className='col-span-12 md:col-span-12 lg:col-span-3'><ProfileCard /></div>
        <div className='col-span-12 md:col-span-12 lg:col-span-5 px-6 overflow-hidden'><ScheduleCard /></div>
        <div className='col-span-12 md:col-span-12 lg:col-span-4 pb-10'><FeatureCard /></div>
        </div>
      </div>
    </>
  )
}

export default App
