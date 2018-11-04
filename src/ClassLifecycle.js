import React, { Component } from "react";
import "./App.css";

class ClassLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }

  setCount = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setCount();
    }, 1000);
  }

  componentDidUpdate(prevProps, { count }) {
    if (count < 2) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>Class / cDM, cWU, cDU</p>
          <div className="counter">
            {count}
          </div>
        </header>
      </div>
    );
  }
}


export default ClassLifecycle;

