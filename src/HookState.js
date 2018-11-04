import React, { useState } from "react";
import "./App.css";

function HookState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const setters = {
    setFirstName,
    setLastName
  };

  function handleChange(event) {
    setters[event.target.name](event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hook / State</p>
        <form>
          <div className="first-name">
            <label htmlFor="first-name">First Name</label>
            <input
              name="setFirstName"
              id="first-name"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="last-name">
            <label htmlFor="last-name">Last Name</label>
            <input
              name="setLastName"
              id="last-name"
              value={lastName}
              onChange={handleChange}
            />
          </div>
        </form>
      </header>
    </div>
  );
}

export default HookState;
