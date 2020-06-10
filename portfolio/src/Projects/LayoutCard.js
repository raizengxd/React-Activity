import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProjectCard from './ProjCard.js';
import {CardColumns} from 'react-bootstrap';

function LayoutCard() {
  return (  
    <div >
        
    <CardColumns>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    </CardColumns>
  

    </div>
 
  );
}

export default LayoutCard;