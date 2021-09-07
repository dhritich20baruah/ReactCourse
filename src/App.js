
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
