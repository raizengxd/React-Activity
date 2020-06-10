import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Container} from 'react-bootstrap/';
import * as Icon from 'react-bootstrap-icons';

import './MainPage.css';

function MainPage() {
  return (   
      <Container>     
        <Col className="top-2">      
          <h1 className="myName">Hi, I am </h1>
          <h1 className="myName">RAIZEN SANGALANG</h1>
          <h3 className="description">
            I focus on Mobile App Development using Dart and Kotlin.
          </h3>
          <Row>
    
          </Row>
        </Col>
       
    </Container>  
  );
}
export default MainPage;