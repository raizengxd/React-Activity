import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {Button} from 'react-bootstrap/';

function NavBar() {
  return (
  
    <Navbar collapseOnSelect expand="lg"  variant="dark" sticky="top" style={{backgroundColor:"#212529"}}>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <Button style={{backgroundColor:"green",borderColor:"none"}}>test</Button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
       
     
    
  );
}

export default NavBar;