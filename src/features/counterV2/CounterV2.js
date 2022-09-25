import React from 'react'
import './counterV2.css';
const CounterV2 = () => {
  const count = 256;
  return (
    <div className="container">
      {/* 監聽 onClick 事件，並放入事件處理函式 */}
  <div className="chevron chevron-up" 
  onClick={()=>{
    console.log(`current Count is ${count}`);

  }}
  />
  <div className="number">
    {count}
  </div>
  <div className="chevron chevron-down"></div>
</div>
  )
}

export default CounterV2