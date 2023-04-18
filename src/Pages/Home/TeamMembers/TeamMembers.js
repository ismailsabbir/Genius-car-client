import React from 'react';
import './TeamMembers.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import team1 from '../../../images/images/team/1.jpg';
import team2 from '../../../images/images/team/2.jpg';
import team3 from '../../../images/images/team/3.jpg';
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare,FaInstagramSquare,FaWhatsappSquare } from "react-icons/fa";


const TeamMembers = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='team-container'>
        <div className='team-head'>
            <h6>Team</h6>
            <h5>Meet our Team</h5>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised</p>
            <p> words which don't look even slightly believable. </p>
        </div>
            <Carousel responsive={responsive}>
  <div className='team'>
    <div className='member-img'>
        <img src={team1} alt=''/>
    </div>
    <div className='member-info'>
    <h5>Car Engine Plug</h5>
    <p>Engine Expert</p>
    <div className='member-contact'>
      <BsFacebook className='contact-icon'></BsFacebook>
      <FaTwitterSquare className='contact-icon'></FaTwitterSquare>
      <FaInstagramSquare className='contact-icon'></FaInstagramSquare>
      <FaWhatsappSquare className='contact-icon'></FaWhatsappSquare>
    </div>
    </div>


  </div>
  <div className='team'>
    <div className='member-img'>
        <img src={team2} alt=''/>
    </div>
    <div className='member-info'>
    <h5>Car Engine Plug</h5>
    <p>Engine Expert</p>
    <div className='member-contact'>
      <BsFacebook className='contact-icon'></BsFacebook>
      <FaTwitterSquare className='contact-icon'></FaTwitterSquare>
      <FaInstagramSquare className='contact-icon'></FaInstagramSquare>
      <FaWhatsappSquare className='contact-icon'></FaWhatsappSquare>
    </div>
    </div>

  </div>
  <div className='team'>
    <div className='member-img'>
        <img src={team3} alt=''/>
    </div>
    <div className='member-info'>
    <h5>Car Engine Plug</h5>
    <p>Engine Expert</p>
    <div className='member-contact'>
      <BsFacebook className='contact-icon'></BsFacebook>
      <FaTwitterSquare className='contact-icon'></FaTwitterSquare>
      <FaInstagramSquare className='contact-icon'></FaInstagramSquare>
      <FaWhatsappSquare className='contact-icon'></FaWhatsappSquare>
    </div>
    </div>

  </div>
  <div className='team'>
    <div className='member-img'>
        <img src={team2} alt=''/>
    </div>
    <div className='member-info'>
    <h5>Car Engine Plug</h5>
    <p>Engine Expert</p>
    <div className='member-contact'>
      <BsFacebook className='contact-icon'></BsFacebook>
      <FaTwitterSquare className='contact-icon'></FaTwitterSquare>
      <FaInstagramSquare className='contact-icon'></FaInstagramSquare>
      <FaWhatsappSquare className='contact-icon'></FaWhatsappSquare>
    </div>
    </div>

  </div>
  <div className='team'>
    <div className='member-img'>
        <img src={team1} alt=''/>
    </div>
    <div className='member-info'>
    <h5>Car Engine Plug</h5>
    <p>Engine Expert</p>
    <div className='member-contact'>
      <BsFacebook className='contact-icon'></BsFacebook>
      <FaTwitterSquare className='contact-icon'></FaTwitterSquare>
      <FaInstagramSquare className='contact-icon'></FaInstagramSquare>
      <FaWhatsappSquare className='contact-icon'></FaWhatsappSquare>
    </div>
    </div>

  </div>
  <div className='team'>
    <div className='member-img'>
        <img src={team1} alt=''/>
    </div>
    <div className='member-info'>
    <h5>Car Engine Plug</h5>
    <p>Engine Expert</p>
    <div className='member-contact'>
      <BsFacebook className='contact-icon'></BsFacebook>
      <FaTwitterSquare className='contact-icon'></FaTwitterSquare>
      <FaInstagramSquare className='contact-icon'></FaInstagramSquare>
      <FaWhatsappSquare className='contact-icon'></FaWhatsappSquare>
    </div>
    </div>

  </div>
</Carousel>
        </div>
    );
};

export default TeamMembers;