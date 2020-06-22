import React from 'react';
import {Row,Container,Col} from 'react-bootstrap';


function Footer() {
 


 
  return (     
    
    <div style={{
        backgroundColor:"#212529",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '50vh'
    } }>



       <div style={{color:"white",fontSize:"15pt"}}>
       <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
    If you need a printable copy of my resume, here ya go! I’ll update this as necessary. However, my site may always be more up to date.

    </Col>
    <Col md="auto">
    If you need a printable copy of my resume, here ya go! I’ll update this as necessary. However, my site may always be more up to date.

    </Col>
    <Col xs lg="2">
     If you need a printable copy of my resume, here ya go! I’ll update this as necessary. However, my site may always be more up to date.
    </Col>
  </Row>
  
</Container>
       </div>
    </div>   
 

    
  );
}

export default Footer;