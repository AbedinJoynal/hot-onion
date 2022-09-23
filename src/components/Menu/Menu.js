import React, { createContext, useEffect, useState } from 'react';
import './Menu.css';
import { NavLink} from 'react-router-dom';
import Itemdata from '../MenuData/Itemdata';
import Item from '../Item/Item';

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
            </div>
         
        </div>
    );
};

export default Menu;
