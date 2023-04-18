import React from 'react';
import './Service.css';
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Service = (props) => {
    const service=props.service;
    console.log(service);
    return (
        <div className='service'>
        <div className='service-img'>
        <img src={service.img} alt='not found'/>
        </div>
        <div className='service-text'>
            <h6>{service.title}</h6>
            <div className='service-bottom'>
            <p>Price: ${service.price}</p>
            <Link to={`/services/${service._id}`}>
                <BsArrowRightShort className='arrow-sign'></BsArrowRightShort>
            </Link>

            </div>
        </div>
        </div>
    );
};

export default Service;