// src/AuthStatus.js
import React from 'react';
import { useSelector } from 'react-redux';

const AuthStatus = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? <p>You are logged in!</p> : <p>You are not logged in.</p>}
    </div>
  );
};

export default AuthStatus;
