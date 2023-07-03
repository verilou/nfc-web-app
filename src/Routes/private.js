import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Auth } from '../context/auth';

const PrivateRoute = ({ children }) => {
    const context = useContext(Auth);
    const location = useLocation();
    return context.user.id ? children : <Navigate to="/login" state={{ from: location }} />;
};

PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PrivateRoute;
