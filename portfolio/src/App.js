import React from 'react';
import NavBar from './Components/navBar.js';
import MainPage from './Page/MainPage.js';
import SkillsPage from './SkillsPage/SkillsPage.js';
import './Projects/LayoutCard.js'

function App() {
  return (
    <div className="App">      
      <NavBar/>  
      <MainPage></MainPage>
      </div>
  );
}

export default App;
