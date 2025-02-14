
import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      if (response.data) {
        console.log('responsedata of login',response.data);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to sign in: invalid credentials");
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", { email, password });
      if (response.data) {
        console.log('response.data',response.data);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to sign up: invalid credentials");
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};