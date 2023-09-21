import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteList from './routes';
import useAuth from './hooks/useAuth';

import { Auth } from './context/auth';
import { Container } from 'react-bootstrap';

function App() {
    const { user, setUser, hasAuthenticated } = useAuth();
    return (
        <Auth.Provider value={{ user, setUser, hasAuthenticated }}>
            <Container>
                <Router>
                    <RouteList />
                </Router>
            </Container>
        </Auth.Provider>
    );
}

export default App;
