import React, { useContext } from 'react';
import './Login.css';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import loginimg from '../../images/images/login/login.svg';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle} from "react-icons/fc";
import { FaMobile } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Usercontex';

const Login = () => {
  const{loginuser,signupwithgoogle}=useContext(Authcontext);
  const navigate=useNavigate();
  // console.log(users.email);
  const handlelogin=(event)=>{
    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;
    console.log(email,password);
    loginuser(email,password)
    .then(req=>{
      const userinfo=req.user;
      console.log(userinfo);
      navigate('/home');
    })
    .then(error=>{
      console.error(error);
    })
    
  }
  const sigingoogle=()=>{
    signupwithgoogle()
    .then(req=>{
      const user=req.user;
      console.log(user);
    })
    .then(error=>{
      console.error(error);
    })
   }
    return (
        <div className='login-container'>
        <div className='login-left'>
        <img src={loginimg} alt='not found'/>
        </div>
        <div className='login-right'>
        <h4>Login</h4>
        <Form onSubmit={handlelogin}>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Your email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder=" Your Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confarm Password</Form.Label>
        <Form.Control type="password" name='conpassword' placeholder=" Your Password" />
      </Form.Group>

      <button className='signin-btn'  type="submit">
        Signin
      </button>
      <div className='another-method-con'>
        <p>or signin with</p>
        <div className='another-method'>
            <BsFacebook className='facebok'></BsFacebook>
            <button onClick={sigingoogle}>
            <FcGoogle className='facebok'></FcGoogle>
            </button>

            <FaMobile className='facebok'></FaMobile>
        </div>
        <p>New user ? please <Link className='sign-btn' to='/signup'>Signup</Link></p>
      </div>
    </Form>
        </div>

        </div>
    );
};

export default Login;