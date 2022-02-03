import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  const handlebutton = () => {
    console.log('button clicked');
  };

  return (
    <div className="main-header">
      <div className="top-header">
        <div className="top-logo">
          <img className="logo-title" src={logo} alt="#" />
          <a href="/login">
            <button onClick={handlebutton} className="signup-btn">
              Sign Up
            </button>
          
          
          <button onClick={handlebutton} className="login-btn">
            <FontAwesomeIcon className="font-cart" icon={faShoppingCart} />{' '}
            Login
          </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Header;
