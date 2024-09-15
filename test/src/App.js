import React from 'react';
import { Display, Login, useAuth } from 'react-login-form-package';
import './App.css';

const App = () => {

  const { username, logout } = useAuth();

  return (
    <div className='app'>
      <h1>Test Project to check the</h1>
      <h4>react-login-form-package</h4>
      {username ? (
        <div>
          <Display />
          <div className='logout-container'>
            <button className='logout-btn' onClick={logout}>Logout</button>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
