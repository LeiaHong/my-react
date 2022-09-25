import React from 'react';
import './App.css';
import CounterV2 from './features/counterV2/CounterV2';
import useFirebase from './hooks/useFirebase';

const counters = Array.from({ length: 14 }, (_, index) => index);
function App() {
  useFirebase();
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {counters.map(() => (
        <CounterV2 />
      ))}
    </div>
  );
}

export default App;
