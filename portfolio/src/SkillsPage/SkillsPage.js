import React,{useState} from 'react';
import {Row,Col,Container,Card} from 'react-bootstrap/';

function SkillsPage() {
    const [passion] = useState([
        {title:"Algorithms",description:"Just really love about Competetive Programming such as codewars, hackerank and codesignal", image:require('./images/Slide1.PNG')},
        {title:"Talk",description:"Sharing my experience to other people is one of my passion, sharing is caring for me and it feels good", image:require('./images/Slide2.PNG')},
        {title:'Solving',description:"Just really passionate about making some solution to the problem that we're facing is the thing that I love ",  image:require('./images/Slide3.PNG')},
        {title:'Design',description:"Just really passionate about making some solution to the problem that we're facing is the thing that I love ", image:require('./images/Slide4.PNG')}
    ]);

    return(

    <div style={{paddingTop:"100px",paddingBottom:"100px"}}>
  <Container>    
          <div className="doc2">
          <div className="details3 typing-letter">
              PASSION
            </div>
    
        <Row xs="1" sm="2" md="4">
        {passion.map(p=>(
            <div key={p.title}>
                <Cardsx title={p.title}  description={p.description} image={p.image}   />
            </div>

        ))}   
        

        </Row>
       
        </div>
        </Container>

      

        </div>
        
   
        
    );
}

function Cardsx({title,image,description}){
   return( <Col style={{paddingTop:"25px"}}>
      <Card>
         
      <Card.Img variant="top" src={image} width={"50%"}></Card.Img>
    <Card.Body>
       
<Card.Title style={{fontWeight:"700"}}>{title}</Card.Title>
      <Card.Text>
       {description}
      </Card.Text>
    </Card.Body>
    </Card>

   </Col>);
}
export default SkillsPage;