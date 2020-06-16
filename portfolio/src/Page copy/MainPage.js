import React from 'react';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap/';
import './MainPage.css';
import LayoutCard from '../Projects/LayoutCard.js'
function MainPage() {
  return (   
      <Container>     
        <Row className="top-2">
          <Col>    
          <h1 className="myName-2">Hello this is  </h1>
          <h1 className="myName">RAIZEN</h1>
          <div className="description">
            
            Computer Science student who doesn't eat water because water is for drinking

          </div>
          </Col>  
          
          
          <div style={{padding:"20px"}}></div>     
         
        </Row>
        
       
    </Container>  
  );
}
export default MainPage;