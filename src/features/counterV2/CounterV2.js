import React, { useState } from 'react';
import './counterV2.css';

function CounterV2() {
  const [count, setCount] = useState(5);
  const handleClick = (type) => () => {
    if (type === 'increment') {
      setCount(count + 1);
    }
    if (type === 'decrement') {
      setCount(count - 1);
    }
  };
  return (
    <div className="container">
      {count < 10 && (
        <div
          className="chevron chevron-up"
          onClick={handleClick('increment')}
        />
      )}
      <div className="number">{count}</div>
      {count > 0 && (
        <div
          className="chevron chevron-down"
          onClick={handleClick('decrement')}
        />
      )}
    </div>
  );
}

export default CounterV2;
