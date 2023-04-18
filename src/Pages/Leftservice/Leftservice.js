import React from 'react';
import './Leftservice.css';
// import images from '../../../src/images/images/checkout/checkout.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Leftservice = (props) => {
    const servicedetals=props.data;
    const {facility}=props.data;
    console.log(servicedetals);
    console.log(facility);
    return (
        <div className='service-left-top'>
            <div className='service-image'>
                <img src={servicedetals.img} alt='not found'/>

            </div>
            <div className='details-text'>
                <h4>{servicedetals.title}</h4>
                <p>{servicedetals.description} </p>
                <div className='facility-container row'>
                    {
                        facility.map((facil)=>(
                            <div className='facility col col-12 col-lg-5'>
                                <h6>{facil.name}</h6>
                                <p>{facil.details}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='service-check'>
                <h5>Prize ${servicedetals.price}</h5>
                    <Link to={`/checkout/${servicedetals._id}`}>
                    <Button variant="danger" className=''>Proceed Checkout</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Leftservice;