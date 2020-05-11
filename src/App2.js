import React, { useReducer } from 'react';
import ComponentA from './Components/UseReducer/withUseContext/ComponentA';
import ComponentB from './Components/UseReducer/withUseContext/ComponentB';
import ComponentC from './Components/UseReducer/withUseContext/ComponentC';
import { initState, reducer } from './Reducer/Reducer';

export const CountContext = React.createContext();
function App2() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className='App'>
        Count ={count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App2;
