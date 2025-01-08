import React from 'react';
import {Link} from 'react-router-dom'
const Riding = () => {
  return (
    <div className="h-screen overflow-auto">
     <Link to='/home'className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full left-5 top-4 '>
     <i className=" text-2xl font-bold ri-home-4-line cursor-pointer "></i>
     </Link>
      <div className="h-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Riding animation"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom Information Section */}
      <div className="h-1/2 p-4 overflow-y-auto">
        {/* Rider Info */}
        <div className="flex items-center justify-between mb-4">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
            className="h-[100px] w-auto"
            alt="Rider avatar"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">SANTH</h2>
            <h4 className="text-xl font-semibold -mt-1">MP04 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="flex flex-col gap-4">
          {/* Pickup Location */}
          <div className="flex items-center gap-4 p-2 border-b">
            <i className="text-2xl ri-map-pin-5-fill"></i>
            <div>
              <h3 className="text-base font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab, Bhopal</p>
            </div>
          </div>

          {/* Drop Location */}
          
          {/* Payment Info */}
          <div className="flex items-center gap-4 p-2">
            <i className="text-2xl ri-currency-line"></i>
            <div>
              <h3 className="text-base font-medium">₹193.20</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <button className='w-full rounded-lg bg-green-600 p-3 text-white font-semibold mt-5 '>Make a payment</button>
      </div>
    </div>
  );
};

export default Riding;
