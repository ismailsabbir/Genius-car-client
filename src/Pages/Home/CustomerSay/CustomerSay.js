import React from 'react';
import './CustomerSay.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import customer1 from '../../../images/images/team/1.jpg';
import { AiFillStar} from "react-icons/ai";
const CustomerSay = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='customer-container'>
        <div className='customer-head'>
            <h6>Testimonial</h6>
            <h4>What Customer Says</h4>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised</p>
            <p> words which don't look even slightly believable. </p>
        </div>
<Carousel responsive={responsive}>
  <div className='person1'>
    <div className='customer-info'>
        <div className='customer-info-top'>
            <img src={customer1} alt=''/>
            <div className='name-profession'>
                <h6>
                Awlad Hossain
                </h6>
                <p>
                Businessman
                </p>
            </div>

        </div>
        <p className='says'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className='customer-rating'>
        <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
        </div>
    </div>
  </div>
  <div className='person1'>
    <div className='customer-info'>
        <div className='customer-info-top'>
            <img src={customer1} alt=''/>
            <div className='name-profession'>
                <h6>
                Awlad Hossain
                </h6>
                <p>
                Businessman
                </p>
            </div>

        </div>
        <p className='says'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className='customer-rating'>
        <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
        </div>
    </div>
  </div>
  <div className='person1'>
    <div className='customer-info'>
        <div className='customer-info-top'>
            <img src={customer1} alt=''/>
            <div className='name-profession'>
                <h6>
                Awlad Hossain
                </h6>
                <p>
                Businessman
                </p>
            </div>

        </div>
        <p className='says'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className='customer-rating'>
        <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
        </div>
    </div>
  </div>
  <div className='person1'>
    <div className='customer-info'>
        <div className='customer-info-top'>
            <img src={customer1} alt=''/>
            <div className='name-profession'>
                <h6>
                Awlad Hossain
                </h6>
                <p>
                Businessman
                </p>
            </div>

        </div>
        <p className='says'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className='customer-rating'>
        <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
        </div>
    </div>
  </div>
  <div className='person1'>
    <div className='customer-info'>
        <div className='customer-info-top'>
            <img src={customer1} alt=''/>
            <div className='name-profession'>
                <h6>
                Awlad Hossain
                </h6>
                <p>
                Businessman
                </p>
            </div>

        </div>
        <p className='says'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className='customer-rating'>
        <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
            <AiFillStar className='start'></AiFillStar>
        </div>
    </div>
  </div>
</Carousel>
        </div>
    );
};

export default CustomerSay;