import React from 'react';
import NavBar from './Components/navBar.js';
import MainPage from './Page/MainPage.js';
import SkillsPage from './SkillsPage/SkillsPage.js';
import Education from './Education/Education.js';
import Quotes from './Quotes/Quotes.js';
import Footer from './FooterData/Footer.js';

import './App.css';
import {Container} from 'react-bootstrap';
import TableSkills from './TableSkills.js';

function App() {

   
  const imge =require("./image/Slide1.PNG");
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
      <Quotes></Quotes>
      <TableSkills></TableSkills>

      <Footer></Footer>
     
       </div>
  );
}

export default App;
