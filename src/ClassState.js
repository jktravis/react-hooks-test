import React, { Component } from 'react';
import './App.css';

class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  setCounter = (counter) => {
    this.setState({ counter });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>Class / State</p>
          <div className="counter">
            {counter}
          </div>
          <div className="buttons">
            <button onClick={() => this.setCounter(counter + 1)}>inc ☝</button>
            <button onClick={() => this.setCounter(counter - 1)}>dec 👇</button>
          </div>
        </header>
      </div>
    );
  }
}

export default ClassState;
