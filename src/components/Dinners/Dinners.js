import React,{ useState} from 'react';
import MenuData from '../MenuData';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import './Dinners.css'

const Dinners = () => {
  const second6 = MenuData.slice(12, 18);
  const handleMenu = (menuitem) => {
    console.log('menu clicked', menuitem);
  };
    console.log(second6);
    const [menu, setMenu] = useState(second6);
  return (
    <div>
      <div className="menu-wrapper">
      <div className="menu-header">
        <a href="/breakfast">Breakfast</a>
        <a href="/lunches">Lunch</a>
        <a href="/Dinner">Dinner</a>
      </div>
      {menu.map((menus) => (
        <Item menuitem={menus}></Item>
      ))}
      <div className="checkout-btn-wrapper">
        <Link to="/review">
          <button className="dinner-btn">Review and Checkout</button>
        </Link>
    </div>
    </div>
    </div>
  );
};

export default Dinners;
