import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    // If no token is found, redirect immediately
    if (!token) {
      navigate('/login');
      return;
    }

    const logoutUser = async () => {
      try {
        // Send logout request to backend
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          localStorage.removeItem('token'); // Remove token after successful logout
          navigate('/login'); // Redirect to login page
        }
      } catch (error) {
        console.error('Logout failed:', error);
        // Handle error (e.g., display a message or redirect)
      }
    };

    logoutUser(); // Call the logout function

  }, [token, navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;
