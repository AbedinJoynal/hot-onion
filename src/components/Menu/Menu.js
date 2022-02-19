import React, { createContext, useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import MenuData from '../MenuData';
import Item from '../Item/Item';
import {addToDb} from '../../utilities/menudb';

export const UserContext = createContext();
const Menu = () => {
  const first6 = MenuData.slice(0, 6);
  const [menu, setMenu] = useState(first6);
  const [item, setItem] = useState([]);
  const handleMenu = (menuitem) => {
    const newitem = [...item, menuitem];
    setItem(newitem);
    const sameItem=newitem.filter(items=>items.key===menuitem.key)
    const count=sameItem.length;
    addToDb(menuitem.key,count)
    console.log('this product is added', menuitem);
  };

  // const removeditem=(newitem) => {
  //   const setitem=newitem.filter(newitems=>newitems.key!==menu);
  //   setMenu(setitem)
  // }
  return (
    <div>
      <div className="menu-wrapper">
        <div className="menu-header">
          <a href="/breakfast">Breakfast</a>
          <a href="/lunches">Lunch</a>
          <a href="/Dinner">Dinner</a>
        </div>

        {menu.map((menus) => (
          <Item menuitem={menus}
          key={menus.key}
          showitem={true} handleMenu={handleMenu}></Item>
        ))}
      </div>
      <h5 className="item-count">{item.length}</h5>
      <div className="checkout-btn-wrapper">
        <Link to="/review">
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
