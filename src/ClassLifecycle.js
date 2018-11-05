import React, { Component } from "react";
import "./App.css";

class ClassLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
    };

    this.setCounter = this.setCounter.bind(this);
  }

  setCounter() {
    this.setState(({ counter }) => ({ counter: counter - 1 }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setCounter();
    }, 1000);
  }

  componentDidUpdate(prevProps, { counter }) {
    if (counter < 2) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>Class / cDM, cWU, cDU</p>
          <div className="counter">
            {counter}
          </div>
        </header>
      </div>
    );
  }
}


export default ClassLifecycle;

