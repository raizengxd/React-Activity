import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';

function NavBar() {
  return (
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        // <Navbar collapseOnSelect expand="lg" variant="dark">
        //   <Navbar.Brand href="#home">
        //     <h1 style={{}}>PA</h1>
        //   </Navbar.Brand>
        //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //   <Navbar.Collapse id="responsive-navbar-nav">
        //     <Nav className="ml-auto">              
        //       <Nav.Link href="#features" className="pad-2"> 
        //       <Icon.House className="pad" />
        //         Home
        //         </Nav.Link>
        //       <Nav.Link href="#pricing" className="pad-2">
        //       <Icon.Building className="pad"  />
        //         Projects</Nav.Link>                   
        //       <Nav.Link href="#deets" className="pad-2">
        //       <Icon.Person className="pad" />             
        //         About</Nav.Link >
        //       <Nav.Link href="#memes" className="pad-2">
        //       <Icon.ChatDots className="pad" />
        //         Contact me</Nav.Link>
        //     </Nav>
        //   </Navbar.Collapse>
        // </Navbar>
     
    
  );
}

export default NavBar;