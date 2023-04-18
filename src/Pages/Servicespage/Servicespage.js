import React from 'react';
import './Servicespage.css'
import { useLoaderData } from 'react-router-dom';
import imge from '../../images/images/checkout/checkout.png';
import Leftservice from '../Leftservice/Leftservice';
import Rightservices from '../Rightservices/Rightservices';
const Servicespage = () => {
    const service=useLoaderData();
    console.log(service);
    return (
        <div className='details-container'>
            <div className='service-top-con'>
                <img src={imge} alt='not found'/>
                <div className='service-banner-text'>
                    <h3>Services</h3>
                </div>
            </div>
            <div className='service-bottom-con row'>
                <div className='service-left col col-12 col-sm-12 col-md-12 col-lg-9'>
                <Leftservice data={service}></Leftservice>
                </div>
                <div className='service-right col col-12 col-sm-12 col-md-12 col-lg-3'>
              <Rightservices></Rightservices>
                </div>
            </div>
        </div>
    );
};

export default Servicespage;