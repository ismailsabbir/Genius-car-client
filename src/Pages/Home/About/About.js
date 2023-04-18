import React from 'react';
import './About.css'
import Button from 'react-bootstrap/Button';
import person from '../../../images/images/about_us/person.jpg';
import parts from '../../../images/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className='about-container'>
        <div className='about-leftss'>
            <img className='person-imgss' src={person} alt=''/>
            <img className='parts-imgss' src={parts} alt=''/>
        </div>
        <div className='about-rights'>
            <h6>About Us</h6>
            <h3>We are qualified & of experience <br/> in this field</h3>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <Button className='about-btn' variant="danger">Get More Info</Button>

        </div>

        </div>
    );
};

export default About;