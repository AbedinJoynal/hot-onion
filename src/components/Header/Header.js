import React, { useState } from 'react';
import './Header.css';
import logo from '../../logo.png';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [item, setItem] = useState([]);
  const handlebutton = (menuitem) => {
    const additem=[...item,menuitem]
    setItem(additem)
    console.log('button clicked',additem);
  };

  return (
    <div className="main-header">
      <div className="top-header">
        <div className="top-logo">
          <a href="/">
            <img className="logo-title" src={logo} alt="#" />
          </a>

          <a href="/login">
            <button onClick={handlebutton} className="signup-btn">
              Sign Up
            </button>

            <button onClick={handlebutton} className="login-btn">
              
                 <FontAwesomeIcon className="font-cart" icon={faShoppingCart} item={item.length}/>{' '}
              
             
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
