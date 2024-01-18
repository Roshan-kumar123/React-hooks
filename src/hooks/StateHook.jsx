import React, { useState } from 'react';

const StateHook = () => {
  const [counterState, setCounterState] = useState({
    count: 0,
    step: 1,
  });

  const handleIncrement = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + prevState.step,
      };
    });
  };

  const handleStep = (newStep) => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        step: newStep,
      };
    });
  };
  return (
    <div>
      <h2>useStateHook</h2>
      <p>Count: {counterState.count}</p>
      <p>Step: {counterState.step}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => handleStep(counterState.step + 1)}>
        Increase Step
      </button>
    </div>
  );
};

export default StateHook;
