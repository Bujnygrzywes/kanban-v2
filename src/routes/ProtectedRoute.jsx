import React from 'react';

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const authContext = useContext(AuthContext);

  if (!authContext?.user?.token) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default ProtectedRoute;
