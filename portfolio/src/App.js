import React from 'react';
import NavBar from './Components/navBar.js';
import MainPage from './Page/MainPage.js';
import SkillsPage from './SkillsPage/SkillsPage.js';
import Education from './Education/Education.js';
import './App.css'
import {Container,Row} from 'react-bootstrap';

function App() {
  return (
    
          
    <div className="App">      
      <NavBar/> 
      
      <Container>
    
      <MainPage></MainPage>
    
    
   
      <SkillsPage></SkillsPage>
     
     
      <Education></Education>
      
      </Container>
     </div>
  );
}

export default App;
