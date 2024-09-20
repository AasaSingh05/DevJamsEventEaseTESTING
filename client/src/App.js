// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import ClubLogin from './components/ClubLogin';
import Events from './Events';
import './App.css';

function App() {
  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    <Route path="/Events"/>
    // Here you would typically send the credential to your backend
    // or use it to authenticate the user in your application
  };

  const handleGoogleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
            <>
              <Login />
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
              />
            </>
          } />
          <Route path="/club-login" element={<ClubLogin />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;