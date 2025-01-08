import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between mt-5 px-6'>
         <div className='flex items-center justify-start gap-2'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" 
          className='h-20 w-20 rounded-full object-cover'/>
          <h4 className='text-lg font-medium '>Harsh Patel</h4>
         </div>
         <div> 
         <h4 className='text-xl font-semibold'> ₹295.20</h4>
         <p className='text-sm font-medium text-gray-600'>Earned</p>
         </div>
       </div>
       <div className='flex  p-3 bg-gray-100 rounded-full  mt-[20px] justify-center items-center gap-[200px] '>
        <div className='text-center '>
          <i className=' text-3xl mb-2  font-thin ri-timer-2-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center '>
        <i className="text-3xl mb-2 font-thin ri-speed-up-line">
        </i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center '>
          <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div>

        </div>

       </div>
    </div>
  )
}

export default CaptainDetails
