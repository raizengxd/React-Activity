import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
function ProjectCard({name,github,language,description}) {
  return (        
    <Card
    bg='dark'    
    text='white'
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>        
            <a href={github}>{name} </a>     
    </Card.Header>
    <Card.Body>      
      <Card.Text >
        {description}
      </Card.Text>      
    </Card.Body>
    <ListGroup className="list-group-flush" style="background">
  <ListGroupItem>{language}</ListGroupItem>
    </ListGroup>
  </Card>
    
  );
}

export default ProjectCard;