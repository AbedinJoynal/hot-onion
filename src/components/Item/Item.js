import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
const Item = (props) => {
  const { name, img, price,key } = props.menuitem;
  return (
    <div className="item-wrapper">
      <div onClick={()=>props.handleMenu(props.menuitem)} className="item-container">
        <img src={img} alt="#" />
        <div className="item-details">
          <h4>{name}</h4>
          <h5><Link to={"/item/"+key}>{price}</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default Item;
