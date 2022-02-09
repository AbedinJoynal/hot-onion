import React from 'react';
import './Item.css';
const Item = (props) => {
  const { name, img, price } = props.menuitem;
  return (
    <div className="item-wrapper">
      <div className="item-container">
        <img src={img} alt="#" />
        <div className="item-details">
          <h4>{name}</h4>
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Item;
