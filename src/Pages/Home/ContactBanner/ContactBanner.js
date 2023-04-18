import React from 'react';
import './ContactBanner.css';
import { AiOutlineCalendar } from "react-icons/ai";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
const ContactBanner = () => {
    return (
        <div className='contact-banner-container'>

        <div className='contact-1'>
        <div>
            <AiOutlineCalendar className='calender'></AiOutlineCalendar>
        </div>
        <div className='time'>
        <p>We are open monday-friday</p>
            <h4>7:00 am - 9:00 pm</h4>
        </div>
        </div>

        <div className='contact-2'>
        <div>
            <MdPermPhoneMsg className='phone'></MdPermPhoneMsg>
        </div>
        <div className='number'>
        <p>
            Have a question?
            </p>
            <h4>+2546 251 2658</h4>
        </div>
        </div>

        <div className='contact-3'>
        <div>
            <ImLocation2 className='location-icon'></ImLocation2>
        </div>
        <div className='location'>
        <p>Need a repair? our address</p>
            <h4>Liza Street, New York</h4>
        </div>
        </div>

        </div>
    );
};

export default ContactBanner;