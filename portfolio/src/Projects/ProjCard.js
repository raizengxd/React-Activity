import React from 'react';

import {Card} from 'react-bootstrap';

function ProjectCard({key,name,github,language,description}) {
  return (        
    <Card
    bg='dark'    
    text='white'
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header >        
            <a href={github} style={{color:"#FFF"}}>{name} </a>     
    </Card.Header>
    <Card.Body>      
      <Card.Text >
        {description}
      </Card.Text>   
      <b>  {language}</b>
     
 
    </Card.Body>
   
  </Card>
    
  );
}

export default ProjectCard;