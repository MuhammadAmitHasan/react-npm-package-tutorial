import React from 'react';
import { useAuth } from './AuthContext';
import Display from './Display';
import Login from './Login';

const App: React.FC = () => {
  const { username, logout } = useAuth();
  return (
    <div>
      {username ? (
        <div>
          <Display />
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
