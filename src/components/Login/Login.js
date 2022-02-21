import React from 'react';
import './Login.css';
const Login = () => {
  return (
    
      <div className="login-container">
        
        <form action="#!" id="main">
    <h2>Sign In</h2>

    <div class="input-parent">
      <label for="username">Username</label>
      <input type="text" id="username"></input>
    </div>

    <div class="input-parent">
      <label for="password">Password</label>
      <input type="password" id="password"></input>
    </div>

    <button className='btn' type="submit">Login</button>
  </form>
      </div>
    
  );
};

export default Login;
