// AuthContext.tsx

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string>('');

  const logout = () => {
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ username, setUsername, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export logout function separately
export const logout = () => {
  const { logout: authLogout } = useAuth();
  return authLogout;
};
