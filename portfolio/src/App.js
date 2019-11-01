import React from 'react';
import './App.css';
import Bio from './components/Bio';
import Projects from './components/Projects';
import SocialProfiles from './components/SocialProfiles';

function App() {
  return (
    <div className="App">
     <Bio/>
     <hr/>     
     <Projects/>
     <hr/>
     <SocialProfiles/>
    </div>
  );
}

export default App;
