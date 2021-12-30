

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#374263';
      showAlert("Dark mode has been enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");

    }
  }

  return (
    <>


      {/* <Navbar title="Textutility" aboutText="About Textutility" /> */}
      {/* <Router> */}
        <Navbar title="Textutility" mode={mode} toggleMode={toggleMode} />
        < Alert alert={alert} />
        <div className="container my-3" >
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <Textform showAlert={showAlert} heading="Enter the text below" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
     
     

    </>
  )
}

export default App;
