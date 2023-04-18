import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Productss.css';
import Product from '../Product/Product';
const Productss = () => {
    const[productss,setproductss]=useState([]);
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setproductss(data));
    return (
        <div>
            <div className='product-head'>
                <h6>Popular Products</h6>
                <h4>Browse Our Products</h4>
                <p>
                the majority have suffered alteration in some form, by injected humour, or randomised </p>
                <p>words which don't look even slightly believable. 
                </p>
            </div>
            <div className='product-container'>
                {
                    productss.map(product=>(
                        <Product sproduct={product}></Product>
                    ))
                }
            </div>
            <div className='moreproduct-btn'>
            <Button className='more-btn' variant="outline-danger">More Product</Button>
            </div>

        </div>
    );
};

export default Productss;