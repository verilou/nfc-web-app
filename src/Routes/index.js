import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../components/login';
import Home from '../components/home';
import Profile from '../components/profile';

const RouteList = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
);

export default RouteList;
