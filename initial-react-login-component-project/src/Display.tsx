import React from 'react';
import './App.css';
import { useAuth } from './AuthContext';

const Display: React.FC = () => {
  const { username } = useAuth();

  return (
    <div className="welcome-container">
      <h2>Welcome, {username}!</h2>
    </div>
  );
};

export default Display;
