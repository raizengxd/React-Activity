import React from 'react';
import {Row,Col} from 'react-bootstrap';


function Education() {
  return (     
    
    <div className="education-lay" style={{paddingTop:"100px", paddingBottom:"100px", }}>
        <div className="details3 typing-letter" style={{paddingBottom:"40px"}}>
            EDUCATON</div>
        <div style={{fontSize:"120%"}}>
        I studied Computer Science at City College of Angeles. In my pursuit to never stop learning,Since I don't have money I try to study some of the tutorials in youtube and also some free courses in Udemy.
        </div>
        <Row className="changeColor" style={{paddingTop:"40px",WebkitFilter:"grayscale(100%)",filter:"grayscale(100%)"}} >
          <Col>
          <img src={require("./logo-cca.png")} height="100px" alt="add3" className="responsive-a"/>
          </Col>
         
          <Col>
          <img src={require("./logo-yt.png")} height="100px" alt="add2" className="responsive-a"/>
          </Col>
          <Col>
          <img src={require("./logo-udemy.png")} height="100px" alt="add" className="responsive-a"/>
          </Col>
          <Col>
          <img src={require("./logo-fc.jpg")} height="100px" alt="add" className="responsive-a"/>
          </Col>
          
        </Row>
    </div>   
 

    
  );
}

export default Education;