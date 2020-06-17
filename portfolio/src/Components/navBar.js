import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';
import './Navbar.css';
function NavBar() {
  return (
  
        <Navbar collapseOnSelect expand="lg" variant="dark" className="top">
          <Navbar.Brand href="#home">
            <h1 style={{color:"white"}}>PA</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">              
              <Nav.Link href="#features" className="pad-2"> 
              <Icon.House className="pad" />
                Home
                </Nav.Link>
              <Nav.Link href="#pricing" className="pad-2">
              <Icon.Building className="pad" color="white" />
                Projects</Nav.Link>                   
              <Nav.Link href="#deets" className="pad-2">
              <Icon.Person className="pad" color="white" />             
                About</Nav.Link >
              <Nav.Link href="#memes" className="pad-2">
              <Icon.ChatDots className="pad" color="white" />
                Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
     
    
  );
}

export default NavBar;