import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/UseState/ClassCounter';
import HookCounter from './Components/UseState/HookCounter';
import HookCounterObjState from './Components/UseState/HookCounterObjState';
import HookCounterPrevState from './Components/UseState/HookCounterPrevState';
import HookCounterListState from './Components/UseState/HookCounterListState';
import HookCounterUseEffect from './Components/UseEffect/HookCounterUseEffect';
import HookCounterUseEffect2 from './Components/UseEffect/HookCounterUseEffect2';
import HookMouse from './Components/UseEffect/HookMouse';
import MouseContainer from './Components/UseEffect/MouseContainer';
import IntervalCounter from './Components/UseEffect/IntervalCounter';
import DataFetching from './Components/UseEffect/DataFetching';
import ReducerCounter from './Components/UseReducer/ReducerCounter';
import ReducerDataFetching from './Components/UseReducer/DataFetching/ReducerDataFetching';

function App() {
  return (
    <div className='App'>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterPrevState /> */}
      {/* <HookCounterObjState /> */}
      {/* <HookCounterListState /> */}
      {/* <HookCounterUseEffect /> */}
      {/* <HookCounterUseEffect2 /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalCounter /> */}
      <DataFetching />
      {/* <ReducerCounter /> */}
      {/* <ReducerDataFetching /> */}
    </div>
  );
}

export default App;
