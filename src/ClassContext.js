import React, { Component } from "react";
import CounterContext from './CounterContext';
import "./App.css";

class ClassContext extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  setCounter = (counter) => {
    this.setState({ counter });
  };

  getContextValue = () => {
    return {
      ...this.state,
      setCounter: this.setCounter,
    };
  };

  render() {
    return (
      <div className="App">
        <CounterContext.Provider value={this.getContextValue()}>
          <header className="App-header">
            <p>Class / Context</p>
            <CounterDisplay/>
          </header>
        </CounterContext.Provider>
      </div>
    );
  }
}

function CounterDisplay() {
  return (
    <CounterContext.Consumer>
      {({ counter, setCounter }) => (
        <>
          <div className="counter">
            {counter}
          </div>
          <div className="buttons">
            <button onClick={() => setCounter(counter + 1)}>inc ☝</button>
            <button onClick={() => setCounter(counter - 1)}>dec 👇</button>
          </div>
        </>
      )}
    </CounterContext.Consumer>
  );
}

export default ClassContext;
