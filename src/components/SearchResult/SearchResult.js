import React from 'react';
import Itemdata from '../MenuData/Itemdata';
import { useParams, Link } from 'react-router-dom';
import './SearchResult.css';
import Item from '../Item/Item';

const SearchResult = () => {
    const { searchQuery } = useParams();
    const searchResult = Itemdata.filter((food) =>
        food.name.includes(searchQuery)
    );

    console.log(searchQuery, searchResult);
    return (
        <section className="food-area">
            <div className="container">
                <p className="text-search">Search Result</p>
                <div className="row my-5">
                    {searchResult.length === 0 && (
                        <h1 className="col-12 display-5 text-center">
                            No food found!
                        </h1>
                    )}

                    {searchResult.map((food) => (
                        <div
                        className='fruit-img'
                        >
                            <Item
                                key={food.id}
                                img={food.img}
                                name={food.name}
                                food={food}
                            ></Item>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link to="/">
                        <button
                        className='see-btn'
                        >See Our all Foods</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SearchResult;
