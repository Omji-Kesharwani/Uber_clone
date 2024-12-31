import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const CaptainSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    const CaptainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:parseInt(vehicleCapacity),
        vehicleType:vehicleType

      }
    };
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,CaptainData)

 if(response.status===201)
 {
  const data=response.data;
  setCaptain(data.captain)
  localStorage.setItem('token',data.token)
  navigate('/captain-home')
 }
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img src="/uber-2.svg" alt="Uber Logo" className="w-24 " />
        </div>
        <h2 className="text-2xl font-bold text-center ">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-3 gap-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Vehicle Details */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="vehicleType" className="block text-gray-700 font-medium mb-2">
                Vehicle Type
              </label>
              <select
                id="vehicleType"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="">Select vehicle type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="vehicleColor" className="block text-gray-700 font-medium mb-2">
                Vehicle Color
              </label>
              <input
                type="text"
                id="vehicleColor"
                placeholder="Vehicle color"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="vehiclePlate" className="block text-gray-700 font-medium mb-2">
                Vehicle Plate
              </label>
              <input
                type="text"
                id="vehiclePlate"
                placeholder="Vehicle plate"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="vehicleCapacity" className="block text-gray-700 font-medium mb-2">
                Vehicle Capacity
              </label>
              <input
                type="number"
                id="vehicleCapacity"
                placeholder="Capacity"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="bg-[#111] text-white font-semibold p-3 w-full rounded-lg"
            isLoading={isLoading}
          >
            {isLoading ? 'Signup...' : 'Create Captain Account'}
          </Button>
        </form>
        <p className="text-center text-md text-gray-600 mt-4">
          Already have an Account?{' '}
          <Link to="/captain-login" className="text-blue-600">
            Login Here
          </Link>
        </p>
        <Button
          type="button"
          className="bg-[#d5622d] text-white font-semibold p-3 w-full rounded-lg mt-8"
        >
          <Link to="/signup">Signup as User</Link>
        </Button>
      </div>
    </div>
  );
};

export default CaptainSignup;
