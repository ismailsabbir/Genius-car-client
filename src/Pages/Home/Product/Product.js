import React from 'react';
import './Product.css';
import { AiFillStar} from "react-icons/ai";
const Product = (props) => {
    const product=props.sproduct;
    // console.log(product);
    return (
        <div className='product'>
        <div className='product-img'>
            <img src={product.picture} alt='not found'/>
        </div>
        <div className='product-bottom'>
        <div className='star-icon'>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
        </div>
        <h6>{product.service}</h6>
        <p className='product-price'>{product.balance}</p>
        </div>
        </div>
    );
};

export default Product;