import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
const CaptainLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const {captain,setCaptain}=useContext(CaptainDataContext)

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    const CaptainData={
      email:email,
      password:password
    }
 
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,CaptainData)

    if(response.status==200)
    {
      const data=response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      setIsLoading(false);
      navigate('/captain-home')

    }


     setEmail('');
     setPassword('');
  };


  return (
    <div className="fixed inset-0 bg-gray-50 overflow-hidden flex flex-col">
      <div className="p-4">
        <img src="/uber-2.svg" alt="Uber Logo" className="w-20 mx-auto" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                What's your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#111] text-fff font-semibold items-center justify-center p-3 w-full rounded-lg text-white"
              isLoading={isLoading}
            >
              {isLoading ? 'Login...' : 'Login'}
            </Button>
          </form>
          <p className="text-center text-md text-gray-600 mt-4">
            Join a fleet? <Link to="/captain-signup" className="text-blue-600">Register as Captain</Link>
          </p>
          <Button
            type="button"
            className="bg-[#d5622d] text-fff font-semibold items-center justify-center p-3 w-full rounded-lg text-white mt-10"
          >
            <Link to={"/login"}>Signin as User</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
