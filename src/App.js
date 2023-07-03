import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteList from './Routes';

function App() {
    return (
        <Router>
            <RouteList />
        </Router>
    );
}

export default App;
