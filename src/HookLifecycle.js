/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from "react";
import "./App.css";

function HookLifecycle() {
  const [count, setCount] = useState(10);

  // cDM, cDU, cWU
  useEffect(() => {
    if (count >= 1) {
      const interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Hook / cDM, cWU, cDU</p>
        <div className="counter">
          {count}
        </div>
      </header>
    </div>
  );
}

export default HookLifecycle;















/* eslint-disable no-unused-vars */
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  let interval;
  // cDM, cDU, cWU
  useEffect(() => {
    if (count >= 1) {
      interval = setInterval(() => {
        setCount(count - 1);
        if (count - 1 <= 0) {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [count]);

  return count;
}