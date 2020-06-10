import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Container} from 'react-bootstrap/';
import './MainPage.css';
import LayoutCard from '../Projects/LayoutCard.js'
function MainPage() {
  return (   
      <Container>     
        <Col className="top-2">      
          <h1 className="myName-2">Hi, I am </h1>
          <h1 className="myName">RAIZEN</h1>
         
          <div className="description">
            I focus on Mobile App Development using Dart and Kotlin.
          </div>
                  
          <LayoutCard/>
        </Col>
       
    </Container>  
  );
}
export default MainPage;