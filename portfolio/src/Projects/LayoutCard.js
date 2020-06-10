import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProjectCard from './ProjCard.js';
import {CardColumns} from 'react-bootstrap';



function LayoutCard() {
  return (  
    <div >        
      <CardColumns>
      <ProjectCard name="Raizen" 
      github="'https://github.com/raizengxd/6APPDEV"
      description="This application helps the event organizer to make their registration for event easier and more secured. It also helps to make the attendance process system as easy as possible, it also provide onsite registration, event maker, QR generator for attendance, and QR Scanner for attendance that suitable in any camera"
      language="python"></ProjectCard>
      
      </CardColumns>
    </div>
 
  );
}

export default LayoutCard;