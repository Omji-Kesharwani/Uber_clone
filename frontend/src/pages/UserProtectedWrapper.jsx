import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';

const UserProtectedWrapper = ({ children }) => {
  const [loading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    const verifyUser = async () => {
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUser(response.data.user); // Assuming `response.data.user` contains user info
        } else {
          throw new Error('Unauthorized');
        }
      } catch (err) {
        console.error('Error verifying user:', err);
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [token, navigate, setUser]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while verifying
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
