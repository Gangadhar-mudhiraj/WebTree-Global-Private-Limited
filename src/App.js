import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './Components/User';
import Nav from './Components/Nav'; // Import Nav component
import Home from './Components/Home';
const App = () => {
    return (
        <div>
            <Router>
                <Nav /> {/* Add Nav component */}
                <Routes>
                    <Route path='/' element={<User />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
