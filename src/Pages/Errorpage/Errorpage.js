import React from 'react';
import './Errorpage.css';
import imges from '../../../src/images/problemimg.avif';
import { Link } from 'react-router-dom';
const Errorpage = () => {
    return (
        <div className='error-container'>
            <img src={imges} alt='not found'/>
            <h4>Please back to <Link className='error-link' to='/home'>Home</Link> page</h4>
        </div>
    );
};

export default Errorpage;