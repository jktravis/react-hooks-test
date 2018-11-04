import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Class / State</p>
          <form>
            <div className="first-name">
              <label htmlFor="first-name">First Name</label>
              <input name="firstName" id="first-name" value={this.state.firstName}
                     onChange={this.handleChange}
              />
            </div>
            <div className="last-name">
              <label htmlFor="last-name">Last Name</label>
              <input name="lastName" id="last-name" value={this.state.lastName}
                     onChange={this.handleChange}
              />
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
