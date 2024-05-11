import React, { useState } from 'react';
import './login.css';
import Navbar from '../../components/header/header-login/navbar-login.jsx';
import { useNavigate } from 'react-router-dom';
import useCheckLogin from '../../hooks/localstorage.jsx';  // Import useCheckLogin hook

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn } = useCheckLogin(); // Use useCheckLogin hook
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submit action
  
    const response = await fetch('https://localhost:7012/api/User/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
  
    if (response.ok) {
      const data = await response.text();
      console.log(data); // User authenticated successfully
      localStorage.setItem('token', data); // Set token in localStorage
      setIsLoggedIn(true); // Update isLoggedIn state
      navigate('/afterclass'); // Navigate to register page after successful login
    } else {
      // Handle errors
      console.error('Failed to login');
    }
  };

  return (
    <div className="login-page">
      <Navbar/>
      <div className="login-container">
        <h2 className="welcome-text">Welcome Back! Cheff</h2>
        <p className="login-prompt">Please login first</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-login'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-login'
          />
          <div className="form-footer">
            <div className="forgot-password">
              <span className="forgot-password-text">Forgot Password?</span>
              <a href="#" className="forgot-password-link">Click Here</a>
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="signup-prompt">
            <p>Don't have account? <a href="#">Sign Up here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
