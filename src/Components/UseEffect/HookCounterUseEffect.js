import React, { useState, useEffect } from 'react';

function HookCounterUseEffect() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log('clicked');
    document.title = `You clicked ${counter} times`;
  });
  return (
    <div>
      <button onClick={incrementCounter}>Clicked {counter} times </button>
    </div>
  );
}

export default HookCounterUseEffect;
