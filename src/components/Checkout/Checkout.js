import React from 'react';
import { Link} from 'react-router-dom';
import deliver from '../Image/Group 1151.png';
import './Checkout.css';
const Checkout = (props) => {
    
    return (
        //do the checkout page
        <div className="checkout-wrapper">
            <div className="checkout-left">
                <h2>Delivery Details</h2>
                <form className="delivery-form">
                    <input
                        type="text"
                        name="delivery"
                        id="delivery"
                        placeholder="Delivery to door"
                        required
                    />
                    <input
                        type="text"
                        name="flat"
                        id="flat"
                        placeholder="Flat"
                        required
                    />
                    <input
                        type="text"
                        name="road"
                        id="road"
                        placeholder="Road No."
                        required
                    />
                    <input
                        type="text"
                        name="adress"
                        id="adress"
                        placeholder="Your adress"
                    />
                    <input
                        type="number"
                        name="carddetails"
                        id="carddetails"
                        placeholder="Card Details"
                    />
                    <button className="login-butns">Confirm And Pay</button>
                </form>
            </div>
            <div className="checkout-right">
                <h2>Shipment Details</h2>
                <img src={deliver} alt="" />
                <p
                    style={{
                        fontSize: '2rem',
                        fontWeight: '400',
                        color: 'red',
                    }}
                >
                    Arriving...
                </p>
                <p className="checkout-deliver">203 ,34 Avenue, Road No 5</p>
                <img src={props.img} alt="" />
                <Link to="/">
                    <button className="login-butns">
                        Change Current Adress
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Checkout;
