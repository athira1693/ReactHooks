import React, { useState, useEffect } from 'react';

function IntervalCounter() {
  const [counter, setCounter] = useState(0);

  const tick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <h2>Cuunter </h2>
      <h2>{counter}</h2>
    </div>
  );
}

export default IntervalCounter;
