// src/Profile.js
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    //username id now having the global username that is extracted from state.login
  const username = useSelector((state) => state.auth.username);

  return (
    <div>
      <h1>Welcome, {username}!</h1>
    </div>
  );
};

export default Profile;
