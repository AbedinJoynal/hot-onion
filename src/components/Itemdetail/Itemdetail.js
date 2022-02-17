import React from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import MenuData from '../MenuData'
import './Itemdetail.css'

const Itemdetail = (props) => {
  const {itemdetails}= useParams()
  const item= MenuData.find(items=> items.key===itemdetails)
  const fooditem=()=> {
    console.log("removed item")
  }
  return (
    <div>
      <h2 style={{color: 'black', fontSize:"30px"}}>Your fooditems :</h2>
      <Item showitem={false} key={props.key} menuitem={item}></Item>
      <button onClick={()=>fooditem()} className="fooditem-btn">Remove</button>
    </div>
  )
}

export default Itemdetail;