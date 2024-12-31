import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    // If no token exists, redirect to captain-login
    if (!token) {
      navigate('/captain-login');
      return;
    }

    const logoutCaptain = async () => {
      try {
        // Sending logout request to the backend
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // If the response is successful, remove the token and redirect to login
        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/captain-login');
        }
      } catch (error) {
        // Log the error response or the error message
        console.error('Logout failed:', error.response?.data || error.message);
        localStorage.removeItem('token'); // Ensure token is removed even on failure
        navigate('/captain-login'); // Redirect to login page after failure
      }
    };

    logoutCaptain(); // Call the logout function
  }, [token, navigate]); // Dependency array ensures this effect runs only when the token changes

  return <div>Logging out...</div>; // Optionally, you could add a spinner or loading indicator
};

export default CaptainLogout;
