import React from 'react'

const LocationPanel = ({vehiclePanelOpen,setVehiclePanelOpen,panelOpne,setPanelOpen}) => {
 console.log(vehiclePanelOpen)
  const locations=[
    "24B,Near Kapoor's Cafe,Civil Lines,Prayagraj",
    "22B,Near Singh's Cafe,Civil Lines,Prayagraj",
    "29B,Near Malhotra's Cafe,Civil Lines,Prayagraj",
    "21B,Near Yuvraj's Cafe,Civil Lines,Prayagraj",
    "28B,Near Sekhar's Cafe,Civil Lines,Prayagraj",

  ]
  return (
    <div>
      {
        locations.map(function(elem,idx){
        return <div 
        onClick={()=>{
         setVehiclePanelOpen(true)
         setPanelOpen(false)
        }}
        key={idx}
        className='flex items-center border-2 border-gray-100 active:border-black m-4 p-4 rounded-xl justify-start gap-2 my-2'>
        <h2 className='bg-[#eee] p-2 rounded-full flex justify-center'>
        <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className='font-medium'>{elem}</h4>
       </div>
        })
      }
     
    </div>
  )
}

export default LocationPanel
