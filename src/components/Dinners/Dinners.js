import React,{ useState} from 'react';
import MenuData from '../MenuData';
import Item from '../Item/Item';

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
        <Item menuitem={menus} handleMenu={handleMenu}></Item>
      ))}
    </div>
    </div>
  );
};

export default Dinners;
