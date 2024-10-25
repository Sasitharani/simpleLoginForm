// src/App.js
import React from 'react';
import LoginForm from '../src/LoginForm';
import AuthStatus from './AuthStatus';
import { Route, Routes } from 'react-router-dom';
import Profile from './profile';
const App = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <AuthStatus />
    </div>
  );
};

export default App;
