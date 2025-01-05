import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 className='"p-3 absolute top-0 left-0 right-0 flex items-center justify-center cursor-pointer text-gray-600 text-3xl'
        onClick={() => props.setvehicleFound(false)}>
        <i className="ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className="font-semibold text-2xl mb-2">Looking for nearby Driver</h3>

       <div className='flex flex-col justify-between items-center gap-2'>
       <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png" alt="car" 
       className='h-[200px]'/>

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
       </div>
    </div>
  )
}

export default LookingForDriver
