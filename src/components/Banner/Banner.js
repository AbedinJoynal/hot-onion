import React, { useState } from 'react';
import './Banner.css';
import Itemdata from '../MenuData/Itemdata';
import banner from '../../bannerbackground.png';
const Banner = () => {
    const [form, setForm] = useState({
        foodname: '',
    });
    const handlesearchfood = (e) => {
        setForm((prevfood) => {
            return {
                ...prevfood,
                [e.target.name]: e.target.value,
            };
        });
    };
    const handleclicksearchfood = (e) => {
        e.preventDefault();
        Itemdata.filter((breakf) => breakf.name === form.foodname);
    };
    console.log(form);
    return (
        <div>
            <img className="banner-image" src={banner} alt="#" />
            <div className="banner-text">
                <p>Hungry? Try Our Delicious Foods</p>
                <input
                    type="text"
                    className="banner-input"
                    defaultValue={form.foodname}
                    onChange={handlesearchfood}
                    placeholder="Search Foods"
                />
                <button
                    onClick={handleclicksearchfood}
                    type="submit"
                    className="banner-search"
                    value="Search"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Banner;
