import React , {useState}from 'react';


import ProjectCard from './ProjCard.js';
import {} from 'react-bootstrap';

function LayoutCard() {
  const [projects] = useState([
    {'name': '6APPDEV', 'github': 'https://github.com/raizengxd/6APPDEV', 'language': 'Java', 'description': 'This is the collection of our activity in our Application development (6APPDEV)'},

{'name': '7OOPAssignment', 'github': 'https://github.com/raizengxd/7OOPAssignment', 'language': 'Python', 'description': null},

{'name': 'Basic-Windows-Form-Application', 'github': 'https://github.com/raizengxd/Basic-Windows-Form-Application', 'language': 'C#', 'description': null},

{'name': 'Challenges', 'github': 'https://github.com/raizengxd/Challenges', 'language': 'Jupyter Notebook', 'description': ' Python Competitive Problem Soving '},
{'name': 'Coding-challenge-03', 'github': 'https://github.com/raizengxd/Coding-challenge-03', 'language': 'Jupyter Notebook', 'description': null},
{'name': 'covid19report', 'github': 'https://github.com/raizengxd/covid19report', 'language': 'HTML', 'description': 'COVID-19 is a never before encountered member of the coronavirus family. Fostering its growth in a Wuhan food market, the virus has now spread to 219 nations and counting.'},
{'name': 'Django-app', 'github': 'https://github.com/raizengxd/Django-app', 'language': 'Python', 'description': 'For Practice purposes only'},
{'name': 'Event-Registration-system-using-Python', 'github': 'https://github.com/raizengxd/Event-Registration-system-using-Python', 'language': 'Python', 'description': 'EVENT REGISTRATION SYSTEM WITH QR TECHNOLOGY AND CERTIFICATE GENERATOR   This application helps the event organizer to make their registration for event easier and more secured. It also helps to make the attendance process system as easy as possible, it also provide onsite registration, event maker, QR generator for attendance, and QR Scanner for attendance that suitable in any camera, and also a certificate generator to complete the attendance Technology used: Python 3.7.4  '}
  ]);



  return (  
    <div >        
    
     {projects.map(project=>(
       <div key={project.name}>
       <ProjectCard language={project.language} name={project.name} github={project.github} description={project.description} />
      </div>
     ) )}
    
  
    </div>
 
  );
}

export default LayoutCard;