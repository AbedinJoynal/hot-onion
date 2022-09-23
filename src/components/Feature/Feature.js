import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import quality from '../Image/adult-blur-blurred-background-687824.png';
import delivery from '../Image/architecture-building-city-2047397.png';
import service from '../Image/chef-cook-food-33614.png';
import './Feature.css';

const Feature = (props) => {
  
    
    return (
        <div className="feature-wrapper">
        
            <div className="feature-title">Why choose us</div>
            <div className="feature-content">
                <div className="feature-details">
                    <img className="feature-img" src={quality} alt="" />
                    <p className="feature-details-title">Best Quality</p>
                    <p className="feature-details-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptate accusamus eius eos recusandae, repellat
                        molestias, soluta tenetur in.
                    </p>
                </div>
                <div className="feature-details">
                    <img className="feature-img" src={delivery} alt="" />
                    <p className="feature-details-title">Home Delivery</p>
                    <p className="feature-details-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptate accusamus eius eos recusandae, repellat
                        molestias, soluta tenetur in.
                    </p>
                </div>
                <div className="feature-details">
                    <img className="feature-img" src={service} alt="" />
                    <p className="feature-details-title">Excellent Service</p>
                    <p className="feature-details-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptate accusamus eius eos recusandae, repellat
                        molestias, soluta tenetur in.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Feature;
