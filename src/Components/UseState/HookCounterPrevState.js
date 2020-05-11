import React, { useState } from 'react';

function HookCounterPrevState() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prev) => prev + 1);
      // setCounter(counter + 1);
    }
  };

  return (
    <div>
      Counter : {counter}
      <br />
      <button onClick={incrementCounter}>Increment by 5</button>
    </div>
  );
}

export default HookCounterPrevState;
