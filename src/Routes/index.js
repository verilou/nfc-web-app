import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../components/login';
import Home from '../components/home';
import Profile from '../components/profile';
import CardList from '../components/cardList';
import Card from '../components/card';
import CardEdit from '../components/cardEdit';
import PrivateRoute from './private';
import { Auth } from '../context/auth';

const RouteList = () => {
    const { hasTryAuthenticated } = useContext(Auth);
    if (!hasTryAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/card/:uuid" element={<Card />} />
            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/card" element={<CardList />} />
                <Route path="/card/:uuid/edit" element={<CardEdit />} />
            </Route>
        </Routes>
    );
};

export default RouteList;
