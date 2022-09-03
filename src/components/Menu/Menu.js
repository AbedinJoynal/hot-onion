import React, { createContext, useEffect, useState } from 'react';
import './Menu.css';
import {NavLink } from 'react-router-dom';
import MenuData from '../MenuData';
import Itemdata from '../MenuData/Itemdata';
import Item from '../Item/Item';
import { addToDb } from '../../utilities/menudb';
import Lunches from '../Lunches/Lunches';

export const UserContext = createContext();
const Menu = () => {
    const [menu, setMenu] = useState([]);
    const breakfast = Itemdata.slice(0, 6);

    useEffect(() => {
        setMenu(
            breakfast.map((previtem) => {
                return {
                    ...previtem,
                };
            })
        );
    }, []);

    //   const [item, setItem] = useState([]);
    //   const handleMenu = (menuitem) => {
    //     const newitem = [...item, menuitem];
    //     setItem(newitem);
    //     const sameItem=newitem.filter(items=>items.key===menuitem.key)
    //     const count=sameItem.length;
    //     addToDb(menuitem.key,count)
    //     console.log('this product is added', menuitem);
    //   };

    // const removeditem=(newitem) => {
    //   const setitem=newitem.filter(newitems=>newitems.key!==menu);
    //   setMenu(setitem)
    // }
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

export default Menu;
