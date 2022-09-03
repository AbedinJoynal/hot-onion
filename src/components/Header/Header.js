import React, { useState } from 'react';
import './Header.css';
import logo from '../../logo.png';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <div className="top-logo">
                <a href="/">
                    <img className="logo-title" src={logo} alt="#" />
                </a>

                <a href="/login">
                    <button className="signup-btn">Sign Up</button>
                </a>

                <a href="/">
                    <FontAwesomeIcon
                        className="font-cart"
                        icon={faShoppingCart}
                        item={props.length}
                    />
                </a>
            </div>
            <p className="login-btn">Login</p>
        </div>
    );
};

export default Header;
