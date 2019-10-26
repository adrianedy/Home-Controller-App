import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToogleLight from './ToogleLight';

function App() {
  const [ isOn, setIsOn ] = useState(true);

  return (
    <div>
      <h2>Smart Remote</h2>    

      <ToogleLight/>
      <ToogleLight/>
      <ToogleLight/>
      <ToogleLight/>
      <ToogleLight/>
      bruh
    </div>
  );
}

export default App;
