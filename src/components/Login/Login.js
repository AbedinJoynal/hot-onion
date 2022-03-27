import React, { useState } from 'react';
import './Login.css';




const Login = () => {
  const [loginEmail, setloginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  
  const login = async () => {};
  const logout = async () => {};

  return (
    <div className="login-container">
      <form action="#!" id="main">
        <h2>Sign In</h2>
        <div className="input-parent">
          <label htmlFor="email"> {'   '} Email </label>
          <input
            type="text"
            id="email"
            onChange={(event) => {
              setloginEmail(event.target.value);
            }}
          ></input>
        </div>
        <div className="input-parent">
          <label
            htmlFor="password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          >
            Password
          </label>
          <input type="password" id="password"></input>
        </div>
        <button className="btn" type="submit" onClick={() => {}}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
