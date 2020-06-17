import React from 'react';
import {Row,Col,Container} from 'react-bootstrap/';
import {SocialMediaIconsReact} from 'social-media-icons-react';
function MainPage() {
  // Styles 
  
  return (  
     <div style>
      <Container>     
        <Row className="top-2">
          <Col>    
          <h1 className="myName-2">Hello this is  </h1>
          <h1 className="myName">PROGRAMMER AKO</h1>
          <div className="description">            
            Computer Science student who doesn't eat water because water is for drinking
          </div>
  
          <div>
          <IconsSoc iconName="facebook"/>
          <IconsSoc iconName="instagram"/>
          <IconsSoc iconName="github"/>
          <IconsSoc iconName="linkedin"/>         
          </div>
          </Col>          
        </Row>
        
        
       
    </Container> 
    </div> 
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
