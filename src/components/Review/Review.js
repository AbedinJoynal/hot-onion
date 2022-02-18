import React, { useEffect, useState } from 'react';
import { getStoredCart,deleteFromDb } from '../../utilities/menudb';
import MenuData from '../MenuData';
import Reviewitem from '../Reviewitem/Reviewitem';

const Review = () => {
  const [item, setItem] = useState([]);
  const removeitem = (itemkey) => {
    console.log('removed item',itemkey);
    const newitem=item.filter(itm=>itm.key!==itemkey)
    setItem(newitem);
    deleteFromDb(itemkey)
  };
  useEffect(() => {
    const saveditem = getStoredCart();
    const itemKeys = Object.keys(saveditem);
    const menuItems = itemKeys.map((key) => {
      const items = MenuData.find((itm) => itm.key === key);
      items.quantity = saveditem[key];
      return items;
    });
    setItem(menuItems);
  }, []);

  return (
    <div>
      <h3>Your fooditems: {item.length}</h3>
      {item.map((itm) => (
        <Reviewitem key={itm.key} items={itm}
        removeitem={removeitem}
        ></Reviewitem>
      ))}
    </div>
  );
};

export default Review;
