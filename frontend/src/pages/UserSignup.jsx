import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import axios from 'axios'
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const navigate=useNavigate();
  const {user,setUser}=useContext(UserDataContext)
 console.log(user)
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    const newUserData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
   console.log(newUserData)
    const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUserData)
    
    if(response.status===201)
    {
      const data=response.data;
      setIsLoading(false);
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
  
    
   
  
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };
  

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col items-center bg-gray-50">
      
      <div className="absolute top-5 w-full flex justify-center">
        <img src="/uber-2.svg" alt="Uber Logo" className="w-20" />
      </div>
      
      
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex mb-4 gap-4">
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
                  onChange={e=>setFirstName(e.target.value)}
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
                  onChange={e=>setLastName(e.target.value)}
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
                onChange={e=>setEmail(e.target.value)}
              />
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
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="bg-[#111] text-fff font-semibold items-center justify-center p-3 w-full rounded-lg text-white"
              isLoading={isLoading}
            >
              {isLoading ? 'Signup...' : 'Signup'}
            </Button>
          </form>
          <p className="text-center text-md text-gray-600 mt-4">
          Already have an Account?{' '}
            <Link to="/signup" className="text-blue-600">Login Here</Link>
          </p>
          <Button
            type="button"
            className="bg-[#10b461] text-fff font-semibold items-center justify-center p-3 w-full rounded-lg text-white mt-8"
          >
            <Link to={"/captain-signup"}>Signup as Captain</Link>
          </Button>
        </div>
      </div>
      
      {/* Footer Message */}
      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-600 px-6">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </footer>
    </div>
  );
};

export default UserSignup;
