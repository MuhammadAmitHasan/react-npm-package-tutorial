import React, { ReactNode } from 'react';

interface AuthContextProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    logout: () => void;
}
declare const AuthProvider: React.FC<{
    children: ReactNode;
}>;
declare const useAuth: () => AuthContextProps;
declare const logout: () => () => void;

declare const Display: React.FC;

declare const Login: React.FC;

export { AuthProvider, Display, Login, logout, useAuth };
