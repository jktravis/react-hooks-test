/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import "./App.css";

class ClassReducer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  dispatch = (action) => {
    this.setState((state) => {
      switch (action.type) {
        case 'increment':
          return {
            counter: state.counter + 1,
          };

        case 'decrement':
          return {
            counter: state.counter - 1,
          };

        default:
          return state;
      }
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>Class / Reducer</p>
          <div className="counter">
            {counter}
          </div>
          <div className="buttons">
            <button onClick={() => this.dispatch({ type: 'increment' })}>inc ☝</button>
            <button onClick={() => this.dispatch({ type: 'decrement' })}>dec 👇</button>
          </div>
        </header>
      </div>
    );
  }
}

export default ClassReducer;


