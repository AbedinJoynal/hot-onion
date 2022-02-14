import React from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import MenuData from '../MenuData'

const Itemdetail = () => {
  const {itemdetails}= useParams()
  const item= MenuData.find(items=> items.key===itemdetails)
  return (
    <div>
      <h2 style={{color: 'black', fontSize:"30px"}}>Your fooditems :</h2>
      <Item menuitem={item}></Item>
    </div>
  )
}

export default Itemdetail