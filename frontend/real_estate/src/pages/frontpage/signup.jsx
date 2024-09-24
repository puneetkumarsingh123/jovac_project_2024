import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signupcss.css'; 

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    role: 'buyer', 
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home'); 
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={userDetails.name}
        onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={userDetails.email}
        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={userDetails.password}
        onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
        required
      />

      <div className="role-selection">
        <label>
          <input
            type="radio"
            value="buyer"
            checked={userDetails.role === 'buyer'}
            onChange={(e) => setUserDetails({ ...userDetails, role: e.target.value })}
          />
          Buyer
        </label>
        <label>
          <input
            type="radio"
            value="seller"
            checked={userDetails.role === 'seller'}
            onChange={(e) => setUserDetails({ ...userDetails, role: e.target.value })}
          />
          Seller
        </label>
      </div>

      <button type="submit" className="signup-button">Sign Up</button>

      <p className="login-option">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </form>
  );
};

export default SignUp;
