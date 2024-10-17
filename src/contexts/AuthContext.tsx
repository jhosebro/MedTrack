import React, {createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { User } from 'firebase/auth'
import { loginUser, logoutUser, registerUser } from '../services/authService';

interface AuthContextType {
    user : User | null;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children } : AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unSuscribe = auth.onAuthStateChanged(setUser);
        return () => unSuscribe();
    }, []);

    const register = async (email: string, password: string) => {
        await registerUser(email, password);
    }

    const login = async (email: string, password: string) => {
        await loginUser(email, password);
    }

    const logout = async()=>{
        await logoutUser();
    }
  return (
    <AuthContext.Provider value={{user, register, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error('useAuth deberia usarse con un AuthProvider');
    }
    return context;
}


