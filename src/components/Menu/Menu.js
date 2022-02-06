import React from 'react';
import './Menu.css';
import {
  Breakfast1,
  Breakfast2,
  Breakfast3,
  Breakfast4,
  Breakfast5,
  Breakfast6,
  Lunch1,
  Lunch2,
  Lunch3,
  Lunch4,
  Lunch5,
  Lunch6,
  Dinner1,
  Dinner2,
  Dinner3,
  Dinner4,
  Dinner5,
  Dinner6,
} from '../../Image';
const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-header">
        <a href="/">Breakfast</a>
        <a href="/">Lunch</a>
        <a href="/">Dinner</a>
      </div>
      <div className="menu-items">
        <div className="breakfast-items">
          <img src={Breakfast1} alt="#" />
          <div className="breakfast-description">
          <h4><b>Breakfast Platter 1</b></h4> 
    <p>Eggs and Bacon</p> 
          </div>
          
        </div>
        <div className="breakfast-items">
          <img src={Breakfast2} alt="#" />
          <div className="breakfast-description">
          <h4><b>Breakfast Platter 2</b></h4> 
    <p>Fruits and Bread</p> 
          </div>
        </div>
        <div className="breakfast-items">
          <img src={Breakfast3} alt="#" />
          <div className="breakfast-description">
          <h4><b>Breakfast Platter 3</b></h4> 
    <p>Chicken Taco</p> 
          </div>
        </div>
        <div className="breakfast-items">
          <img src={Breakfast4} alt="#" />
          <div className="breakfast-description">
          <h4><b>Breakfast Platter 4</b></h4> 
    <p>Bread and Egg</p> 
          </div>
        </div>
        <div className="breakfast-items">
          <img src={Breakfast5} alt="#" />
          <div className="breakfast-description">
          <h4><b>Breakfast Platter 5</b></h4> 
    <p>Sandwich And Omlette</p> 
          </div>
        </div>
        <div className="breakfast-items">
          <img src={Breakfast6} alt="#" />
          <div className="breakfast-description">
          <h4><b>Breakfast Platter 6</b></h4> 
    <p>Salad And Sandwich</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
