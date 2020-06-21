import React from 'react';
import NavBar from './Components/navBar.js';
import MainPage from './Page/MainPage.js';
import SkillsPage from './SkillsPage/SkillsPage.js';
import Education from './Education/Education.js';
import Quotes from './Quotes/Quotes.js';
import './App.css'
import {Container,Row} from 'react-bootstrap';

function App() {
  
  console.log('I was triggered during componentDidMount')
 
  return (
    
  
    <div className="App">      
      <NavBar/> 
      
      <div style={{
        
       
        backgroundImage: `url(${imge})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
      }} className="bgx">
      <Container>    
      <MainPage></MainPage>    
      </Container>
     </div>
      <SkillsPage></SkillsPage>
     <Quotes></Quotes>
     <Container>
      <Education></Education>
      </Container>
    
     </div>
  );
}

export default App;
