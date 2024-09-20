import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './Login.css'; // We'll create this file for styling

function Login() {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store user data in localStorage or state management solution
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirect to events page
        navigate('/events');
      } else {
        console.error('Google login failed');
      }
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  const handleGoogleLoginError = () => {
    console.error('Google login failed');
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <div className="google-login-button">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginError}
          size="large"
          theme="filled_blue"
        />
      </div>
    </div>
  );
}

export default Login;