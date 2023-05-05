import React, { useState } from 'react';
import './Rightservices.css';
import Button from 'react-bootstrap/Button';
// import { BsArrowRightShort } from "react-icons/bs";
import imge from '../../../src/images/logo.svg'
import { Link } from 'react-router-dom';
const Rightservices = () => {
    const[service,setservice]=useState([]);
    // const service=services.users;
    console.log(service);
    fetch('https://genius-car-server-ismailsabbir.vercel.app/services')
    .then(req=>req.json())
    .then(data=>setservice(data))
    return (
        <div>
        <h5 className='ser'>Services</h5>
        <div className='service-link-container'>
            {
                service.map((serv)=>(
                    <Button  variant="danger" className='service-type'>
                    <Link className='service-link' to={`/services/${serv._id}`}><p>{serv.title}</p></Link>
                    {/* <BsArrowRightShort className='arrow-sign'></BsArrowRightShort> */}
                    </Button>
                ))
            }
        </div>
        <div className='help'>
        <img src={imge} alt='not found'/>
        <h6>Need Help? We Are Here</h6>
        <h6>To Help You</h6>
        <div className='offer'>
            <h6>Car Doctor Special</h6>
            <p>Save up to 60% off</p>
            <Button variant="danger" className='get'>Get A Quote</Button>
        </div>
        </div>
        </div>
    );
};

export default Rightservices;