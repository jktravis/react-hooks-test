import React, { useState } from "react";
import "./App.css";

function HookState() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hook / State</p>
        <div className="counter">
          {counter}
        </div>
        <div className="buttons">
          <button onClick={() => setCounter(counter + 1)}>inc ☝</button>
          <button onClick={() => setCounter(counter - 1)}>dec 👇</button>
        </div>
      </header>
    </div>
  );
}

export default HookState;
