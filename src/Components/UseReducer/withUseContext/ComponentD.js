import React, { useContext } from 'react';
import { CountContext } from '../../../App2';

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentD
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentD;
