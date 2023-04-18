import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import checkout from '../../../src/images/images/checkout/checkout.png';
import './Checkout.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Authcontext } from '../../Context/Usercontex';
const Checkout = () => {
    const services=useLoaderData();
    const{users}=useContext(Authcontext);
    console.log(users?.email);
    console.log(services);
    const{title,price,img}=services;
    const handlesubmit=(event)=>{
        event.preventDefault();
        const firstname=event.target.firstname.value;
        const lastname=event.target.lastname.value;
        const mobile=event.target.number.value;
        // const email=users?.email||'unregister';
        const email=event.target.email.value;
        const message=event.target.message.value;
        const imge=img;
        // const prices=price;
        let date = new Date().toLocaleDateString();
        const orderinfo={firstname,lastname,mobile,email,title,price, message,imge,date};
        console.log(orderinfo);
        fetch('http://localhost:5000/orders',{
          method : 'post',
          headers :{ 'Content-Type' : 'application/json'},
          body : JSON.stringify(orderinfo)
        
        })
        .then(req=>req.json())
        .then(data=>console.log(data))
        .catch(error=>console.error(error))
    }
    return (
        <div className='checkout-container'>
        <div className='checktop'>
        <img src={checkout} alt='not found'/>
        <div className='check-text'>
            <h3>Check Out</h3>
        </div>
        </div>
        <div className='check-form'>
        <form onSubmit={handlesubmit}>
        <div className='flname'>
        <Form.Group className="mb-3 name">
        <Form.Control className='firstname' name='firstname' type="name" placeholder="First name" />
      </Form.Group>
      <Form.Group className="mb-3 name">
        <Form.Control name='lastname' type="name" placeholder="last name" />
      </Form.Group>
        </div>
        <div className='flname'>
        <Form.Group className="mb-3 name">
        <Form.Control name='number' type="phone" placeholder="Mobile number" />
      </Form.Group>
      <Form.Group className="mb-3 name">
        <Form.Control name='email'  type="email" placeholder="Email" />
      </Form.Group>
        </div>
        <Form.Group className='message'>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          name='message'
          style={{ height: '100px' }}
          
        />
        </Form.Group>
<div className='btn-checkout'>
<Button className='check-btn' variant="danger" type="submit">
        Submit
      </Button>
</div>

        </form>

        </div>
        </div>
    );
};

export default Checkout;