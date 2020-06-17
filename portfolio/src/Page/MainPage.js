import React from 'react';
import {Row,Col,Container} from 'react-bootstrap/';
import ReactTypingEffect from 'react-typing-effect';
import {SocialMediaIconsReact} from 'social-media-icons-react';




function MainPage() {
  return (   
      <Container>     
        <Row className="top-2">
          <Col>  
          <Row> 
          <h1 className="head-title">
            I am <span>
            <ReactTypingEffect
      text={["Human","Programmer", "Developer"]}
      typingDelay="6000ms" 
    />
              </span>
          </h1>
          </Row> 
          <div className="description">            
            Computer Science student who doesn't eat water because water is for drinking
          </div>
          <div style={{padding:"20px"}}></div>  
          <div>
          <IconsSoc iconName="facebook"/>
          <IconsSoc iconName="instagram"/>
          <IconsSoc iconName="github"/>
          <IconsSoc iconName="linkedin"/>         
          </div>
          </Col>          
        </Row>
        
        
       
    </Container>  
  );
}

function IconsSoc({iconName, iconUrl}){
  return (
    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0"
     borderStyle="solid" icon={iconName} iconColor="rgba(255,255,255,1)"
      backgroundColor="rgba(28,186,223,0)" iconSize="2" roundness="26%" 
      url={iconUrl} size="50" />
  );

}

export default MainPage;
