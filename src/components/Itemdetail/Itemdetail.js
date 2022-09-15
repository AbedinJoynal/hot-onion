import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import Itemdata from '../MenuData/Itemdata';
import './Itemdetail.css';

const usePrevious = (value) => {
    const prev = useRef();
    useEffect(() => {
        prev.current = value;
    });
    return prev.current;
};

const Itemdetail = (props) => {
    const [additem,setAdditem]=useState(0);
    const [count, setCount] = useState(0);
    const handleadd = () => {
        setCount(count + 1);
    };
    const handlesubtract = () => {
        setCount(count - 1);
    };
    const handleadditem = () => {
        setAdditem(additem + 1);
    };
    const { itemdetails } = useParams();
    const item = Itemdata.find((items) => items.id === itemdetails);
    const fooditem = () => {
        console.log('removed item');
    };
    return (
        <div className='detail-wrapper'>
           <div className='detail-container'>
             <p className='detail-title'>{item.name}</p>
            
            <p className='detail-desc'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                accusantium in repellat! Optio amet fugit nemo voluptates,
                placeat rem quibusdam, inventore perspiciatis error deserunt
                accusamus dolore veniam at tenetur animi.
            </p>

            <div className='detail-count-wrapper'>
                <p className='detail-price'>{item.price}</p>
                <div className='btn-wrapper'>
                   <button onClick={handleadd}> + </button>
                {count}
                <button onClick={handlesubtract}> - </button> 
                </div>
                
            </div>
            <button
            onClick={handleadditem}
            className='detail-add'>Add</button>
           </div>
           <p 
            className='item-count'
            >{additem}</p>
            <img className='detail-img' src={item.img} alt="" />
        </div>
    );
};

export default Itemdetail;
