import React, { useState } from 'react';

function HookCounter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      Counter : {counter}
      <br />
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default HookCounter;
