

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import TextForm2 from './components/TextForm2';
// import TesxtForm3 from './components/TextForm3';

// import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type)=>{
    setAlert({
      msg:message,
     type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#083664';
      showalert("darkmode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("lightmode has been enabled", "success");
    }
  }

  

  return (
  
    <>
    {/* <Router> */}
      {/* default navbar */}
      {/* <Navbar /> */}
      <Navbar Title="Hi Sunil" AboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
        {/* <Routes> */}
          {/* exact keyword is going to match the exact link */}
          {/* <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TextForm showalert={showalert} Title="Enter Text To Analyaze" mode={mode}/>}></Route> */}
          <TextForm showalert={showalert} Title="Enter Text To Analyaze" mode={mode}/>
        {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
