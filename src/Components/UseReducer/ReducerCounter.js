import React, { useReducer } from 'react';

const initState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.payload };
      break;

    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.payload };
      break;

    case 'reset':
      return initState;
      break;

    default:
      return state;
  }
};

function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>Count: {count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default ReducerCounter;
