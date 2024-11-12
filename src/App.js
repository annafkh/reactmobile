// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataList from './components/DataList';
import DataDetail from './components/DataDetail';
import Profile from './components/Profile';
import './App.css'; // Mengimpor file CSS

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DataList />} />
                <Route path="/data/:id" element={<DataDetail />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;