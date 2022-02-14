import React, { useState } from 'react';
import './Menu.css';
import MenuData from '../MenuData';
import Item from '../Item/Item';
const Menu = () => {
  const first6 = MenuData.slice(0, 6);
  const handleMenu = (menuitem) => {
    console.log('menu clicked', menuitem);
  };
  console.log(first6);
  const [menu, setMenu] = useState(first6);
  return (
    <div>
    <div className="menu-wrapper">
      <div className="menu-header">
        <a href="/breakfast">Breakfast</a>
        <a href="/lunches">Lunch</a>
        <a href="/Dinner">Dinner</a>
      </div>

      {menu.map((menus) => (
        <Item menuitem={menus} handleMenu={handleMenu}></Item>
      ))}
    </div>
    <div className="checkout-btn-wrapper">
     { menu.item ?
      <button className="checkout-btn">Checkout</button>
      : 
      <button className="checkout-btn">Add item</button>
    }
    </div>
    </div>
  );
};

export default Menu;
