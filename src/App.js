import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import useFirebase from './hooks/useFirebase';
import CounterV2 from './features/counterV2/CounterV2';

function App() {
  useFirebase()
  return (
<CounterV2 />
  );
}

export default App;
