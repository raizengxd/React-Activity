import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';


function Education() {
  return (     
<Container>    <div className="education-lay" style={{paddingTop:"100px", paddingBottom:"100px"}}>
        <div className="details3 typing-letter" style={{paddingBottom:"40px"}}>
            EDUCATON</div>
        <div >
        I studied Computer Science at Holy Angel University. In my pursuit to never stop learning, I’m constantly improving my skills by taking courses such as Harvard’s CS50 via edX for stronger Computer Science fundamentals, and on Udacity and Udemy mainly for general programming.
        </div>
        <Row style={{paddingTop:"40px"}}>
          <Col>
          <img src={require("./logo-cca.png")} height="100px" alt="add3" className="responsive-a"/>
          </Col>
          <Col>
          <img src={require("./logo-edx.png")} height="90px" alt="add2" className="responsive-a"/>
          </Col>
          <Col>
          <img src={require("./logo-yt.png")} height="120px" alt="add2" className="responsive-a"/>
          </Col>
          <Col>
          <img src={require("./logo-udemy.png")} height="100px" alt="add" className="responsive-a"/>
          </Col>
          <Col>
          <img src={require("./logo-fc.jpg")} height="100px" alt="add" className="responsive-a"/>
          </Col>
          
        </Row>
    </div>   
    </Container>

    
  );
}

export default Education;