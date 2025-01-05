import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='"p-3 absolute top-0 left-0 right-0 flex items-center justify-center cursor-pointer text-gray-600 text-3xl'
        onClick={() => props.setVehiclePanelOpen(false)}>
        <i className="ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className="font-semibold text-2xl mb-2">Choose a Vehicle</h3>
        {/* Vehicle Information */}
        {[
          {
            name: 'UberGo',
            seats: 4,
            time: '2 mins away',
            description: 'Affordable, compact rides',
            price: '₹193.20',
            imgSrc:
              'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png',
          },
          {
            name: 'Auto',
            seats: 3,
            time: '2 mins away',
            description: 'Affordable, Auto rides',
            price: '₹118.20',
            imgSrc:
              'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png',
          },
          {
            name: 'Moto',
            seats: 1,
            time: '3 mins away',
            description: 'Affordable, motorcycle rides',
            price: '₹65.17',
            imgSrc:
              'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png',
          },
        ].map((vehicle, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-4 w-full p-4 border-2 border-gray-200 rounded-xl shadow-sm"
            onClick={()=>{
              props.setConfirmRidePanel(true)
            }}
          >
            <img className="h-16 w-16 object-contain" src={vehicle.imgSrc} alt={vehicle.name} />
            <div className="flex-grow px-4">
              <h4 className="font-medium text-lg flex items-center gap-2">
                {vehicle.name} <i className="ri-user-fill"></i> {vehicle.seats}
              </h4>
              <h5 className="text-sm text-gray-600">{vehicle.time}</h5>
              <p className="text-xs text-gray-500">{vehicle.description}</p>
            </div>
            <h2 className="text-2xl font-semibold">{vehicle.price}</h2>
          </div>
        ))}
    </div>
  )
}

export default VehiclePanel
