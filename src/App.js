import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div id="App">
     <Navbar/>
     <Header/>
     {/* <Feature/> */}
     <About/>
     <h2 className='firsttest'><span className='spantest'>THIS IS A TEST</span></h2>
     <Contact/>
     <div className='endline'/>
    </div>
  );
}

export default App;
