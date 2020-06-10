import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
function ProjectCard() {
  return (        
    <Card
    bg='dark'    
    text='white'
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Header 
        
            <Icon.Pen></Icon.Pen>
        
    </Card.Header>
    <Card.Body>
      
      <Card.Text >
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
    
  );
}

export default ProjectCard;