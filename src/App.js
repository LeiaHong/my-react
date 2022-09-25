import React from 'react';
import './App.css';
import CounterV2 from './features/counterV2/CounterV2';
import useFirebase from './hooks/useFirebase';

function App() {
  useFirebase();
  return <CounterV2 />;
}

export default App;
