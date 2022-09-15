import React, { useState } from 'react';
import './Banner.css';
import Itemdata from '../MenuData/Itemdata';
import banner from '../../bannerbackground.png';
import { Link } from 'react-router-dom';
const Banner = () => {
    const [form, setForm] = useState({
        foodname: '',
    });
    const [searchQuery, setSearchQuery] = useState(null);
    const getQuery = (e) => setSearchQuery(e.target.value);

    console.log(form);
    return (
        <div>
            <img className="banner-image" src={banner} alt="#" />
            <div className="banner-text">
                <p>Hungry? Try Our Delicious Foods</p>
                <input
                    id="query"
                    onChange={getQuery}
                    type="text"
                    className="banner-input"
                    defaultValue={form.foodname}
                    placeholder="Search Foods"
                />
                <Link to={'/search=' + searchQuery}>
                    <button
                        onClick={() => window.scrollBy(0, 500)}
                        type="submit"
                        className="banner-search"
                        value="Search"
                    >
                        Search
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
