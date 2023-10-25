import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode is set', 'success');
      // document.title = 'TextUtils - Dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is set', 'success');
      // document.title = 'TextUtils - Light mode'
    }
  }
  const [mode, setMode] = useState('light')
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Try textUtils - Word counter, Character counter, Format your text" mode={mode} />}>
            </Route>
            <Route path='/about' element={<About mode={mode}/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
