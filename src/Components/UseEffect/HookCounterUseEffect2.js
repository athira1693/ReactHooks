import React, { useState, useEffect } from 'react';

function HookCounterUseEffect2() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log('clicked');
    document.title = `You clicked ${counter} times`;
  });

  // }, [counter]);

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={incrementCounter}>Clicked {counter} times </button>
    </div>
  );
}

export default HookCounterUseEffect2;
