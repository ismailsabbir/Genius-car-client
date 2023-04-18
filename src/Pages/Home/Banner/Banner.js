import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../images/images/banner/1.jpg';
import img2 from '../../../images/images/banner/2.jpg';
import img3 from '../../../images/images/banner/3.jpg';
import img4 from '../../../images/images/banner/4.jpg';
import img6 from '../../../images/images/banner/6.jpg';
import Button from 'react-bootstrap/Button';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel className='carouselss'>
        <Carousel.Item className='carousel-itemss' interval={1000}>
        <div className='img-gradient'>
        <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </div>
          <Carousel.Caption className='carousel-text'>
            <h1>
            Affordable <br/>    price for car <br/>Servicing 
            </h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
          <div className='banner-btn-con'>
          <button className="discover-btn">Discover More</button>
          <Button variant="outline-light">Latest project</Button>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-itemss' interval={500}>
        <div className='img-gradient'>
        <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </div>
          <Carousel.Caption className='carousel-text'>
          <h1>
            Affordable <br/>    price for car <br/>Servicing 
            </h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
          <div className='banner-btn-con'>
          <button className="discover-btn">Discover More</button>
          <Button variant="outline-light">Latest project</Button>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-itemss'>
        <div className='img-gradient'>
        <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </div>
          <Carousel.Caption className='carousel-text'>
          <h1>
            Affordable <br/>    price for car <br/>Servicing 
            </h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
          <div className='banner-btn-con'>
          <button className="discover-btn">Discover More</button>
          <Button variant="outline-light">Latest project</Button>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-itemss'> 
        <div className='img-gradient'>
        <img
            className="d-block w-100"
            src={img4}
            alt="Third slide"
          />
        </div>
          <Carousel.Caption className='carousel-text'>
          <h1>
            Affordable <br/>    price for car <br/>Servicing 
            </h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
          <div className='banner-btn-con'>
          <button className="discover-btn">Discover More</button>
          <Button variant="outline-light">Latest project</Button>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-itemss'>
        <div className='img-gradient'>
        <img
            className="d-block w-100"
            src={img1}
            alt="Third slide"
          />
        </div>
          <Carousel.Caption className='carousel-text'>
          <h1>
            Affordable <br/>    price for car <br/>Servicing 
            </h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
          <div className='banner-btn-con'>
          <button className="discover-btn">Discover More</button>
          <Button variant="outline-light">Latest project</Button>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-itemss'>
        <div className='img-gradient'>
        <img
            className="d-block w-100"
            src={img6}
            alt="Third slide"
          />
        </div>

          <Carousel.Caption className='carousel-text'>
          <h1>
            Affordable <br/>    price for car <br/>Servicing 
            </h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
          <div className='banner-btn-con'>
          <button className="discover-btn">Discover More</button>
          <Button variant="outline-light">Latest project</Button>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;