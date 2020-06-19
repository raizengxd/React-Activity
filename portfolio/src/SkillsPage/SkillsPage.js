import React,{useState} from 'react';
import {Row,Col,Container,Card} from 'react-bootstrap/';

function SkillsPage() {
    const [passion] = useState([
        {title:"Algorithms",description:"Just really love about Competetive Programming such as codewars, hackerank and codesignal",image:require('./image-2.jpg')},
        {title:"Talk",description:"Sharing my experience to other people is one of my passion, sharing is caring for me and it feels good",image:require('./image-2.jpg')},
        {title:'Problem Solving',description:"Just really passionate about making some solution to the problem that we're facing is the thing that I love ", image:require('./image-2.jpg')}
    ]);

    return(

    
  
        <div className="doc2">
          <div style={{textAlign:"center", fontSize:"36pt", fontWeight:"700"}}>

          Things that I'm Passionate about
            </div>
    
        <Row xs="1" sm="2" md="4">
        {passion.map(p=>(
            <div key={p.title}>
                <Cardsx title={p.title}  description={p.description} image={p.image}   />
            </div>

        ))}   
        

        </Row>
       
        </div>
      


        
   
        
    );
}

function Cardsx({title,image,description}){
   return( <Col style={{paddingTop:"25px"}}>
      <Card>
         
      <Card.Img variant="top" src={image} width={"50%"}></Card.Img>
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