import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/login';
import Home from '../components/home';

const RouteList = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
    </Routes>
);

export default RouteList;
