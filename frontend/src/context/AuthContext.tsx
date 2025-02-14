
import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AutohideSnackbar from '../components/SnackBar';
import { SnackbarCloseReason } from '@mui/material';

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
  const [message, setMessage] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState('error');
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log('baseUrl',baseUrl); 

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, { email, password });
      if (response.data) {
        console.log('responsedata of login',response.data);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        navigate("/");
        setMessage("You have been signed in successfully.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSeverity('error');
        setMessage(error.message);
        setSnackbarOpen(true);
      }
  }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, { email, password });
      if (response.data) {
        console.log('response.data',response.data);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        navigate("/");
        setMessage("You have been signed up successfully.");
        setSeverity('success');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSeverity('error');
        setMessage(error.message);
        setSnackbarOpen(true);
      }
  }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/signin");
    setMessage("You have been signed out.");
    setSeverity('success');
  };

  const handleCloseSnackbar = (event: React.SyntheticEvent<any> | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut }}>
      {children}
      <AutohideSnackbar open={snackbarOpen} message={message || ''}  severity={severity} onClose={handleCloseSnackbar} />
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