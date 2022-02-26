import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleAction = (id) => {
    console.log('input recorded',id);
  };
  return (
    <div className="login-container">
      <form action="#!" id="main">
        <h2>Sign In</h2>
        <div className="input-parent">
          <label htmlFor="email"> {'   '} Email </label>
          <input
            type="text"
            id="username"
           onChange={(event) => {
              setEmail(event.target.value);
            }}
          >
        </input>
        </div>
        <div className="input-parent">
          <label
            htmlFor="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          >
            Password
          </label>
          <input type="password" id="password"></input>
        </div>
        <button className="btn" type="submit" onClick={() => handleAction()}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
