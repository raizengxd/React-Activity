import React from 'react';
import NavBar from './Components/navBar.js';
import MainPage from './Page/MainPage.js';
import SkillsPage from './SkillsPage/SkillsPage.js';

import './App.css'
function App() {
  return (
    
          
    <div className="App">      
      <NavBar/> 
      <div className="doc3">
      <MainPage></MainPage>
      </div>
      <SkillsPage></SkillsPage>
     </div>
  );
}

export default App;
