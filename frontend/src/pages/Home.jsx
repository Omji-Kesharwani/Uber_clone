import React from 'react';
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <div>
      <div
        className='h-screen w-full bg-red-400 flex flex-col justify-between pt-8 bg-[url(https://images.unsplash.com/photo-1545948548-863537438416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-bottom lg:bg-right-bottom'
      >
        <img src="/uber-2.svg" alt="Uber Logo" className='w-16 ml-8 ' />
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link
            to="/login" // Replace with the actual route path
            className='flex items-center justify-center w-full bg-black text-white text-center py-3 rounded mt-5'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
