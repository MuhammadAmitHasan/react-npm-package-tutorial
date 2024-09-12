import React, { useState } from 'react';
import './App.css';
import Display from './Display';
import Login from './Login';

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleLogin = (username: string) => {
    setUsername(username);
  };

  const handleLogout = () => {
    setUsername('');
  };

  return (
    <div>
      {username ? (
        <Display username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default LoginComponent;
