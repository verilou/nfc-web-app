import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteList from './routes';
import useAuth from './hooks/useAuth';

import { Auth } from './context/auth';

function App() {
    const { user, setUser, hasAuthenticated } = useAuth();
    return (
        <Auth.Provider value={{ user, setUser, hasAuthenticated }}>
            <Router>
                <RouteList />
            </Router>
        </Auth.Provider>
    );
}

export default App;
