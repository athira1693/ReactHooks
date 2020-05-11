import React, { useContext } from 'react';
import ComponentD from './ComponentD';
import { CountContext } from '../../../App2';

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentA
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

export default ComponentA;
