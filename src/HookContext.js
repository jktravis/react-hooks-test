/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useContext, useState } from "react";
import CounterContext from './CounterContext';
import "./App.css";

function HookContext() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <CounterContext.Provider value={{ counter, setCounter }}>
        <header className="App-header">
          <p>Hook / Context</p>
          <CounterDisplay/>
        </header>
      </CounterContext.Provider>
    </div>
  );
}

function CounterDisplay() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <>
      <div className="counter">
        {counter}
      </div>
      <div className="buttons">
        <button onClick={() => setCounter(counter + 1)}>inc ☝</button>
        <button onClick={() => setCounter(counter - 1)}>dec 👇</button>
      </div>
    </>
  );
}

export default HookContext;
