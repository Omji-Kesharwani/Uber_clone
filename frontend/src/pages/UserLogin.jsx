import React, { useState } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert('Please fill out all fields');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      setUserData({
        fullName:{
          firstName:firstName,
          lastName:lastName
        },
        email,
        password
      });

      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }, 1000);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-gray-50">
      {/* Logo at the top center */}
      <div className="absolute top-5 w-full flex justify-center">
        <img src="/uber-2.svg" alt="Uber Logo" className="w-20" />
      </div>

      {/* Login form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="w-full px-4 py-2 border bg-[#eeeeee] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>
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
          New Here? <Link to="/signup" className="text-blue-600">Create new Account</Link>
        </p>
        <Button
          type="button"
          className="bg-[#10b461] text-fff font-semibold items-center justify-center p-3 w-full rounded-lg text-white mt-5"
        >
          <Link to={"/captain-login"}>Signin as Captain</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
