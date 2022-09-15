import React, { useEffect, useState } from 'react';

import Item from '../Item/Item';
import { NavLink } from 'react-router-dom';

import './Lunches.css';
import Itemdata from '../MenuData/Itemdata';
const Lunches = () => {
    const [menu, setMenu] = useState([]);
    const lunch = Itemdata.slice(6, 12);
    useEffect(() => {
        setMenu(
            lunch.map((previtem) => {
                return {
                    ...previtem,
                };
            })
        );
    }, []);
    

    return (
        <div className="menu-wrapper">
            <div className="menu-header">
            <ul className="item-ul">
                   <li>
                    <NavLink exact activeClassName="active" to="/breakfast">
                        Breakfast
                    </NavLink>{' '}
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/lunches">
                        Lunch
                    </NavLink>{' '}
                </li>
                <li>
                    {' '}
                    <NavLink exact activeClassName="active" to="/Dinner">
                        Dinner
                    </NavLink>{' '}
                </li>  
                </ul>
            </div>
            <div className="menu-grid">
                {menu.map((menus) => (
                    <Item
                        menuitem={menus}
                        key={menus.id}
                        name={menus.name}
                        description={menus.description}
                        price={menus.price}
                        img={menus.img}
                    ></Item>
                ))}

                {/* <h5 className="item-count">{menu.length}</h5> */}
            </div>

            {/* <Link className="checkout-btn-wrapper" to="/review">
    <button className="checkout-btn">Checkout</button>
</Link> */}
        </div>
    );
};

export default Lunches;
