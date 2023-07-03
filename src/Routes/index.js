import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../components/login';
import Home from '../components/home';
import Profile from '../components/profile';
import PrivateRoute from './private';
import { Auth } from '../context/auth';

const RouteList = () => {
    const { hasAuthenticated } = useContext(Auth);

    if (!hasAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default RouteList;
