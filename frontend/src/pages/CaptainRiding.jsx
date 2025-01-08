import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {
  const [finishRidePanel,setFinishRidePanel]=useState(false)
  const finishRidePanelRef=useRef(null)
  useGSAP(() => {
    gsap.to(finishRidePanelRef.current, {
      transform: finishRidePanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [finishRidePanel]);
  return (
    <div className="h-screen overflow-hidden absolute">
    <div className="fixed p-3 top-0 flex justify-evenly">
      <img src="/uber-2.svg" alt="Uber Logo" className="w-16" />
      <Link
        to="/captain-home"
        className="ml-2 h-10 w-10 bg-white flex items-center justify-center rounded-full top-4"
      >
        <i className="text-lg ri-logout-box-line"></i>
      </Link>
    </div>
    <div className="h-4/5">
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Riding animation"
        className="h-full w-screen object-cover"
      />
    </div>

   
    <div className="h-1/5 p-6 bg-yellow-400  relative "
    onClick={()=>{
      setFinishRidePanel(true)
    }}>
    <h5 className='"p-3 absolute top-0  flex items-center justify-center cursor-pointer text-gray-600 text-2xl w-full mb-2 '
       >
        <i className="ri-arrow-down-wide-fill"></i>
        </h5>
      <h4 className='text-xl font-semibold  flex items-center justify-center'>
        4 KM away
      </h4>
      <button className='rounded-lg bg-green-600 flex justify-center p-4 text-white font-semibold w-full mt-3 '>Complete Ride</button>
     
    </div>
    <div
        className="fixed z-10 bottom-0 px-3 py-8 bg-white w-screen flex flex-col pt-12 translate-y-full"
        ref={finishRidePanelRef}
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>

   
  </div>
  )
}

export default CaptainRiding
