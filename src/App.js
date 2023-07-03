import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteList from './routes';
import { Auth } from './context/auth';
import useAuth from './hooks/useAuth';

function App() {
    const { user, setUser } = useAuth();
    return (
        <Auth.Provider value={{ user, setUser }}>
            <Router>
                <RouteList />
            </Router>
        </Auth.Provider>
    );
}

export default App;
