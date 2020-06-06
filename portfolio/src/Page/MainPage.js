import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './MainPage.css';
function MainPage() {
  return (
    
        <Container>
    <Row className="header-2">
        <Col className="header" sm={8}>
          
        </Col>
        <Col sm={4}>sm=4</Col>
    </Row>
    <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
    </Row>
    </Container>
     
    
  );
}

export default MainPage;