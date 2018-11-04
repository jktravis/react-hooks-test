import React, { useReducer } from "react";
import "./App.css";

function HookReducer() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'update/firstName':
        return {
          ...state,
          firstName: action.payload,
        };

      case 'update/lastName':
        return {
          ...state,
          lastName: action.payload,
        };

      default:
        return state;
    }
  }, { firstName: '', lastName: '' });

  const handleChange = (event) => {
    dispatch({
      type: event.target.name,
      payload: event.target.value,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hook / Reducer</p>
        <form>
          <div className="first-name">
            <label htmlFor="first-name">First Name</label>
            <input
              name="update/firstName"
              id="first-name"
              value={state.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="last-name">
            <label htmlFor="last-name">Last Name</label>
            <input
              name="update/lastName"
              id="last-name"
              value={state.lastName}
              onChange={handleChange}
            />
          </div>
        </form>
      </header>
    </div>
  );
}

export default HookReducer;





















function useFirstLastNameReducer() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'update/firstName':
        return {
          ...state,
          firstName: action.payload,
        };

      case 'update/lastName':
        return {
          ...state,
          lastName: action.payload,
        };

      default:
        return state;
    }
  }, { firstName: '', lastName: '' });

  return [state, dispatch];
}

