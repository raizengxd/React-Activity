import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {Button} from 'react-bootstrap/';



function NavBar() {
  return (
  
    <Navbar collapseOnSelect expand="lg"  variant="dark" sticky="top" style={{backgroundColor:"#212529"}}>
  <Navbar.Brand href="#home" style={{fontWeight:"500",color:"#12b2df"}}>Rai</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
  
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>   
      <Nav.Link href="#fpricing">Blog</Nav.Link>    
      <Button variant="flat" style={{backgroundColor:"#12b2df",borderColor:"none"}}>Contact</Button>
     </Nav>
  </Navbar.Collapse>
</Navbar>
       
     
    
  );
}

export default NavBar;