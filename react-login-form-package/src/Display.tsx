import React from 'react';

interface DisplayProps {
  username: string;
  onLogout: () => void;
}

const Display: React.FC<DisplayProps> = ({ username, onLogout }) => {
  return (
    <div className="welcome-container">
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Display;
