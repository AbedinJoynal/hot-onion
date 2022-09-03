import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import image1 from '../Image/breakfast1.png';
import Itemdetail from '../Itemdetail/Itemdetail';
import './Item.css';
const Item = (props) => {
    const history=useHistory()
    const handleitem = () => {
       history.push(`/item/${props.menuitem.id}`)
    };
    return (
        <div onClick={handleitem} className="item-wrapper">
            <img className="item-img" src={props.img} alt="##" />
            <p className="prop-name">{props.name}</p>
            <p className="prop-desc">{props.description}</p>
            <p className="prop-price">{props.price}</p>
        </div>
    );
};

export default Item;
