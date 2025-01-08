import React from 'react'

const RidePopUp = (props) => {

  return (
    <div>
      <h5 className='"p-3 absolute top-0 left-0 right-0 flex items-center justify-center cursor-pointer text-gray-600 text-3xl'
      onClick={()=>{

        props.setRidePopUpPanel(false)
      }}
       >
        <i className="ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className="font-semibold text-2xl mb-2 text-center">New Ride Available !</h3>
        <div className='flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg'>
          <div className='flex items-center gap-3  mt-4'>
          <img src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" 
          className='h-20 w-20 rounded-full object-cover'/>
          <h2 className='font-medium text-lg '>Harshali Singhania</h2>
          </div>
          <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>

       <div className='flex flex-col justify-between items-center gap-2'>
      

      <div className='w-full mt-5 '>
      <div className='flex items-center gap-5 p-3 border-b-2 '>
      <i className=" text-lg ri-map-pin-5-fill"></i>
      <div>
      <h3 className='text-[30px] font-medium'>562/11-A</h3>
      <p className='text-base text-gray-600 -mt-1 m-2'>Kankariya Talab, Bhopal</p>
      </div>
      </div>
        <div className='flex items-center gap-5 p-3 border-b-2 '>
        <i className=" text-[30px] ri-map-pin-user-fill"></i>
      <div>
      <h3 className='text-lg font-medium'>562/11-A</h3>
      <p className='text-base text-gray-600 -mt-1 m-2'>Kankariya Talab, Bhopal</p>
      </div>
        </div>
        <div className='flex items-center gap-5 p-3 '>
        <i className="text-[30px] ri-currency-line"></i>
      <div>
      <h3 className='text-lg font-medium'>₹193.20</h3>
      <p className='text-base text-gray-600 -mt-1 m-2'>Cash Cash</p>
      </div>
        </div>
       </div>
       <div className='flex items-center gap-4  justify-between p-x-4 rounded-lg w-[40%]'>
       <button 
        onClick={()=>{
          props.setConfirmRidePopUp(true)
        }}
        className='rounded-lg bg-green-600 p-3 text-white font-semibold mt-5 '>
          Accept
        </button>
        <button
        onClick={()=>{
          props.setRidePopUpPanel(false)
        }} 
       
        className=' rounded-lg bg-gray-300 p-3 text-gray-700 font-semibold mt-5 '>
          Ignore
        </button>
       </div>
       </div>
    </div>
  )
}

export default RidePopUp
