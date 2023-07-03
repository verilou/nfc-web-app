import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Auth } from '../context/auth';

const PrivateRoute = () => {
    const context = useContext(Auth);
    const location = useLocation();
    return context.user.id ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
