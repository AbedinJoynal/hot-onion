import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import MenuData from '../MenuData';
import './Itemdetail.css';

const usePrevious = (value) => {
  const prev = useRef();
  useEffect(() => {
    prev.current = value;
  });
  return prev.current;
};

const Itemdetail = (props) => {
  
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  const { itemdetails } = useParams();
  const item = MenuData.find((items) => items.key === itemdetails);
  // const fooditem = () => {
  //   console.log('removed item');
  // };
  return (
    <div>
      <h2 style={{ color: 'red', fontSize: '30px' }}>Your food :</h2>
      <Item showitem={false} key={props.key} menuitem={item}></Item>
      <button onClick={() => setCount(count + 1)} className="fooditem-btn">
        +
      </button>
      <button onClick={() => setCount(count - 1 )} className="fooditem-btn-ano">
        -
      </button>
      <h4 className="fooditem-count">{count}</h4>
    </div>
  );
};

export default Itemdetail;
