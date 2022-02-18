import React, { useState } from 'react';
import MenuData from '../MenuData';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import {addToDb} from '../../utilities/menudb';
import './Dinners.css';

const Dinners = () => {
  const second6 = MenuData.slice(12, 18);
  const [menu, setMenu] = useState(second6);
  const [item, setItem] = useState([]);
  const handleMenu = (menuitem) => {
    const newitem = [...item, menuitem];
    setItem(newitem);
    const sameItem=newitem.filter(items=>items.key===menuitem.key)
    const count=sameItem.length;
    addToDb(menuitem.key,count)
    console.log('this product is added', menuitem);
  };

  return (
    <div>
      <div className="menu-wrapper">
        <div className="menu-header">
          <a href="/breakfast">Breakfast</a>
          <a href="/lunches">Lunch</a>
          <a href="/Dinner">Dinner</a>
        </div>
        {menu.map((menus) => (
          <Item menuitem={menus} key={menus.key} showitem={true} handleMenu={handleMenu}></Item>
        ))}
        <div className="checkout-btn-wrapper">
          <Link to="/review">
            <button className="dinner-btn">Review and Checkout</button>
          </Link>
        </div>
      </div>
      <h5 className="item-count">{item.length}</h5>
    </div>
  );
};

export default Dinners;
