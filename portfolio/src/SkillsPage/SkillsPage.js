import React,{useState} from 'react';
import {Row,Col,Container,Card} from 'react-bootstrap/';

function SkillsPage() {
    const [passion] = useState([
        {title:"Algorithms",description:"Just really love about Competetive Programming such as codewars, hackerank and codesignal",image:"./image.jpg"},
        {title:"Talk",description:"Sharing my experience to other people is one of my passion, sharing is caring for me and it feels good",image:"./image.jpg"},
        {title:'Problem Solving',description:"Just really passionate about making some solution to the problem that we're facing is the thing that I love ", image:"./image.jpg"}
    ]);

    return(

    
     <Container>
        <div class="doc2">
          <div style={{textAlign:"center", fontSize:"36pt", fontWeight:"700"}}>

          Things that I'm Passionate about
            </div>
    
        <Row xs="1" sm="2" md="4">
        {passion.map(p=>(
            <Cardsx title={p.title}  description={p.description}   />
        ))}

            
        </Row>
       
        </div>
        </Container>


        
   
        
    );
}

function Cardsx({title,image,description}){
   return( <Col style={{paddingTop:"25px"}}>
      <Card>
         
      <Card.Img variant="top" src={require("./image.jpg")}></Card.Img>
    <Card.Body>
       
<Card.Title>{title}</Card.Title>
      <Card.Text>
       {description}
      </Card.Text>
    </Card.Body>
    </Card>

   </Col>);
}
export default SkillsPage;