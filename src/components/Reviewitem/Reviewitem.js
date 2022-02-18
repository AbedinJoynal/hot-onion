import React from 'react';
import './Reviewitem.css';
const Reviewitem = (props) => {
  const { name, quantity, key } = props.items;
  return (
    <div>
      <h4>{name}</h4>
      <p style={{ color: 'red', fontSize: '15px', fontweight: 'bold' }}>
        Quantity: {quantity}
      </p>
      <button onClick={() => props.removeitem(key)} className="review-btn">
        Remove
      </button>
    </div>
  );
};

export default Reviewitem;
