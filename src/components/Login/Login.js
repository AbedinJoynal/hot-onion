import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import banner from '../../bannerbackground.png';
import logoicon from '../../logo2.png';
import './Login.css';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
    });
    const history = useHistory();
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                console.log(user);
                toast('User Created Successfully');
                // ...
            })
            .catch((error) => {
                console.log(error);
                // ..
            });
    };
    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const signedinuser = {
                    isSignedIn: true,
                    email: email,
                };
                setUser(signedinuser);
                const user = userCredential.user;
                console.log(user.email);
                history.push('/');
            })
            .catch((error) => {
                toast.error('Invalid Email or Password', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                history.push('/login');
            });
    };

    return (
        <div className="login-wrapper">
            <img className="login-banner" src={banner} alt="" />
            <div className="login-container">
                <a href="/">
                    <img className="login-logo" src={logoicon} alt="" />
                </a>
                <div className="main-form">
                    <input
                        className="login-input"
                        autoComplete="false"
                        type={'email'}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                    />
                    <input
                        className="login-input"
                        autoComplete="false"
                        type={'password'}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                    />
                    <button className="login-butn" onClick={signUp}>
                        Create Account
                    </button>
                    <button className="login-butn" onClick={signIn}>
                        Sign in
                    </button>
                    {user.isSignedIn && <h4>welcome:{user.email}</h4>}
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;
