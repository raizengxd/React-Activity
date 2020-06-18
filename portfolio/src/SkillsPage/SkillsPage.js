import React,{useState} from 'react';
import {Row,Col,Container,Card} from 'react-bootstrap/';

function SkillsPage() {
    const [passion] = useState([
        {'title':"Algorithms"},
        {'title':"Talk"},
        {'title':'Problem Solving'}
    ]);

    return(

    
     <Container>
        <div class="doc2">
          <div style={{textAlign:"center", fontSize:"36pt", fontWeight:"700"}}>

          Things that I'm Passionate about
            </div>
        <div style={{paddingTop:"30px"}}></div>
        <Row xs="1" sm="2" md="4">
        {passion.map(p=>(
            <Cardsx title={p.title}/>
        ))}

            
        </Row>
       
        </div>
        </Container>


        
   
        
    );
}

function Cardsx({title,image,description}){
   return( <Col style={{paddingTop:"25px"}}>
      <Card>
      <Card.Img variant="top" src={require('./image.jpg')}></Card.Img>
    <Card.Body>
       
<Card.Title>{title}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    </Card>

   </Col>);
}
export default SkillsPage;