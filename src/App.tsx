// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import Login from './components/Login';
import Register from './components/Register';
import Divbar from './components/Divbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home /> } />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </Router>
  );
};

export default App;
