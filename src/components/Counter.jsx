/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../css/counter.css";

const Counter = () => {
  let initialValue = 0;

  const [count, setCount] = useState(initialValue);

  const add = () => {
    if (count === 10) {
      return;
    } else {
      setCount((prev) => prev + 1);
    }
  };

  const reduce = () => {
    if (count === 0) {
      return;
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="counter-main-section">
      <div className="heading-section">
        <h2>Counter Value: {count}</h2>
      </div>
      <div className="button-section">
        <button onClick={add}>Add</button>
        <button onClick={reduce}>Reduce</button>
      </div>    
    </div>
    
  );
};

export default Counter;
