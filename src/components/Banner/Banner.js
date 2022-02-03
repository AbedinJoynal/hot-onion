import React from 'react';
import './Banner.css';
import banner from '../../bannerbackground.png';
const Banner = () => {
  return <div>
    <div className="banner-header">
    <img className="banner-image" src={banner} alt="#" />
      <div className="banner-text">

        <p >Feeling Hungry? Try Our Delicious Foods</p>
        <input type="text" className="banner-input" placeholder="Search your foods" />
        <input type="submit" className="banner-search" value="Search"/>
      </div>

      
    </div>
  </div>;
};

export default Banner;
