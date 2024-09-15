// Login.tsx

import React, { useState } from 'react';
import './App.css';
import { useAuth } from './AuthContext';

const Login: React.FC = () => {
  const { setUsername } = useAuth();
  const [username, setUsernameLocal] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill all the fields.');
    } else {
      setError('');
      setUsername(username);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label>Username:</label>
          <input
            placeholder="Input your username"
            type="text"
            value={username}
            onChange={(e) => setUsernameLocal(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            placeholder="Input your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
