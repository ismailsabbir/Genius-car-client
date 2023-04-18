import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiShoppingBag,BiSearch } from 'react-icons/bi';
import './Header.css';
import { Authcontext } from '../../Context/Usercontex';
const Header = () => {
  const{users,logoutuser}=useContext(Authcontext);
  console.log(users?.displayName);
  const logouthandle=()=>{
logoutuser()
.then(()=>{
  console.log('logout');
})
.then(error=>{
  console.error(error);
})
  }
    return (
      <div className='navbar-container'>
 <Navbar bg="light" expand="lg">
      <Container fluid>
        <img className='nav-logo' src={logo} alt=''/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-item-container"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='nav-item' to='/'>Home</Link>
            <Link className='nav-item' to='/'>About</Link>
            <Link className='nav-item' to='/services'>Service</Link>
            <Link className='nav-item' to='/orders'>Orders</Link>
            <Link className='nav-item' to='/'>Blog</Link>
            <Link className='nav-item' to='/'>Contact</Link>

            <Link className='nav-item' to='/signup'>Signup</Link>  
            {users?.email?<Link onClick={logouthandle} className='nav-item' to=''>Logout</Link> : <Link className='nav-item' to='/login'>Login</Link>}       
  
          </Nav>
          <div className='nav-end-item'>
          <BiShoppingBag className='nav-icon'></BiShoppingBag>
          <BiSearch className='nav-icon'></BiSearch>
          {
            users?.displayName?<p>{users.displayName}</p>:<p>{users?.email}</p>
          }
          <Button className='nav-btn' variant="outline-danger">Appoinment</Button>
          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    );
};

export default Header;