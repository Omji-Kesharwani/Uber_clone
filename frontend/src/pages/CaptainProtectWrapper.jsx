import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtectWrapper = ({ children }) => {
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // To store error messages
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { captain, setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
      return; 
    }

    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setCaptain(response.data.captain); // Assuming the profile data is in response.data.captain
        }
      } catch (err) {
        console.log('Error:', err);
        localStorage.removeItem('token');
        setError('Session expired or invalid token. Please log in again.');
        navigate('/captain-login');
      } finally {
        setIsLoading(false); // Ensure loading state is set to false once the fetch attempt is complete
      }
    };

    fetchCaptainProfile(); // Invoke the function to fetch profile data
  }, [token, navigate, setCaptain]); // Dependency array ensures it runs on token change

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or skeleton loader for better UX
  }

  if (error) {
    return <div>{error}</div>; // Display the error message if something went wrong
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
