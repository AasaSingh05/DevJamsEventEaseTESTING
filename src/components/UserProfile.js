// src/components/UserProfile.js
import React from 'react';
import './UserProfile.css';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img src={user.picture} alt={user.name} className="user-avatar" />
      <span className="user-name">{user.name}</span>
    </div>
  );
}

export default UserProfile;