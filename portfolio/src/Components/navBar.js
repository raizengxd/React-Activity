import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';
import './Navbar.css';
function NavBar() {
  return (
  
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">RAIZEN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">              
              <Nav.Link href="#features">
              <Icon.House className="pad" />
                Home
                </Nav.Link>
              <Nav.Link href="#pricing">
              <Icon.Building className="pad" />
                Projects</Nav.Link>                   
              <Nav.Link href="#deets">
              <Icon.Person className="pad" />             
                About</Nav.Link>
              <Nav.Link href="#memes">
              <Icon.ChatDots className="pad" />
                Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
     
    
  );
}

export default NavBar;