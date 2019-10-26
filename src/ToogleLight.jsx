import React, { useState } from 'react';
import './App.css';

function ToogleLight() {
  const [ isOn, setIsOn ] = useState(true);

  return (
    <div>
      <div style={{ background: "#eaeaea", border: "solid 1px black", padding: "14px"}}>
        <button onClick={() => setIsOn(!isOn) }>Turn {isOn ? "on" : "off"} the light</button>
      </div>
    </div>
  );
}

export default ToogleLight;
