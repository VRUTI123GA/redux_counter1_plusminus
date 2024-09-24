import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CounterSlice from './store/counter.jsx';

const App = () => {
  const dispatch = useDispatch();

  function countUpdate(e) {
    dispatch(CounterSlice.actions.incCount());

  }
  function countUpdate1(e) {
    dispatch(CounterSlice.actions.decCount());

  }
  function countUpdate2(e) {
    dispatch(CounterSlice.actions.resetCount());

  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={countUpdate}>plus</button>
      <button onClick={countUpdate1}>minus</button>
      <button onClick={countUpdate2}>reset</button>
    </div>
  )
}

export default App
