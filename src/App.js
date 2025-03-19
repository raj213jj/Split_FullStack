// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './pages/Dashboard';
import GroupDetails from './pages/GroupDetails';

const App = () => {
  return (
      <Router>
          <div className="container">
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/group/:id" element={<GroupDetails />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
