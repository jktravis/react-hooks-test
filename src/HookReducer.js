import React, { useReducer } from "react";
import "./App.css";

function HookReducer() {
  const [state, dispatch] = useReducer((state, action) => {
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
  }, { counter: 0 });

  return (
    <div className="App">
      <header className="App-header">
        <p>Hook / Reducer</p>
        <div className="counter">
          {state.counter}
        </div>
        <div className="buttons">
          <button onClick={() => dispatch({ type: 'increment' })}>inc ☝</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>dec 👇</button>
        </div>
      </header>
    </div>
  );
}

export default HookReducer;















function useCounterReducer() {
  const [state, dispatch] = useReducer((state, action) => {
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
  }, { counter: 0 });

  return [state, dispatch];
}

