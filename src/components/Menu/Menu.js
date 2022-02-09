import React, { useState } from 'react';
import './Menu.css';
import MenuData from '../MenuData';
import Item from '../Item/Item';
const Menu = () => {
  const first6 = MenuData.slice(0, 6);
  console.log(first6);
  const [menu, setMenu] = useState(first6);
  return (
    <div className="menu-wrapper">
      <div className="menu-header">
        <a href="/breakfast">Breakfast</a>
        <a href="/lunch">Lunch</a>
        <a href="/Dinner">Dinner</a>
      </div>
      {menu.map((menus) => (
        <Item menuitem={menus}></Item>
      ))}
    </div>
  );
};

export default Menu;
