import React from 'react';
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

                <a href="/login">
                    <FontAwesomeIcon
                        className="font-cart"
                        icon={faShoppingCart}
                    />
                </a>
            </div>

            <p className="login-btn">
                <Link className="login-btns" to="/login">
                    Login
                </Link>
            </p>
         
        </div>
    );
};

export default Header;
