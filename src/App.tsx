// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignInPage';
import SignUp from './components/SIgnUpPage';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Home';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './context/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;