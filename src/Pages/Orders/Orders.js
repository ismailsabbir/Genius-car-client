import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Context/Usercontex';
import imge from '../../../src/images/images/clean1.jpg';
import './Order.css';
import { Button } from 'react-bootstrap';
const Orders = () => {
    const{users,logoutuser}=useContext(Authcontext);
    const[order,setorder]=useState([]);
    console.log(order);
    // token
    console.log(localStorage.getItem('genius_token'));
    useEffect(()=>{
        fetch(`https://genius-car-server-sepia-eight.vercel.app/orders?email=${users.email}`,{
            headers:
            {
                authorization:`Bearer ${localStorage.getItem('genius_token')}`
            }
        })
        .then(req=>{
            if(req.status===401 || req.status===403){
                return logoutuser()
            }
            return req.json()
        })
        .then(data=>{
            // console.log(data);
            setorder(data)
        })
    },[users?.email,logoutuser]);

    // const[displayorder,setdisplayorder]=useState(order);
    // console.log(displayorder);
    const delatehandler=(id)=>{
        console.log('delate',id);
        const agree=window.confirm('Delate order????');
        if(agree){
            fetch(`http://localhost:5000/orders/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('delate sucessfull');
                    const remin=order.filter(ord=>ord._id !== id);
                    setorder(remin);
                }

            })
        }
    }
    return (
        <div className='order-container'>
        <div className='order-head-con'>
            <img src={imge} alt='not found'/>
            <div className='banner-text'>
                <h4>Cart Details</h4>
            </div>
        </div>
        <div className='cart'>
        {
            order.map(ord=>
                <div className='order'>
                    <button onClick={()=>delatehandler(ord._id)} className='delate-order'>X</button>
                    <img src={ord?.imge} alt='not found'/>
                    <p>price{ord.price}</p>
                    <p>{ord?.date}</p>
                    <Button variant="danger">pending</Button>
                </div>
            )
        }
        </div>
        </div>
    );
};

export default Orders;