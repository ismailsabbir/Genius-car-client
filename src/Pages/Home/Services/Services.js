import React, { useState } from 'react';
import './Services.css';
import Service from '../Service/Service';
const Services = () => {
    const [services,setservices]=useState([]);
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setservices(data))
    return (
        <div>
            <div className='service-head'>
                <h6>Services</h6>
                <h2>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised</p>
                <p> words which don't look even slightly believable. </p>
            </div>
            <div className='service-container'>
                {
                    services.map(services=>(
                        <Service service={services} key={services._id} ></Service>
                    ))
                }
            </div>
            <div className='btn-container'>
                <button className='more-service-btn'>More Service</button>
            </div>
        </div>
    );
};

export default Services;