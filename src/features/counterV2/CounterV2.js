import React, { useState } from 'react'
import './counterV2.css';
const CounterV2 = () => {
const [count, setCount] = useState(256)
  return (
    <div className="container">
  <div className="chevron chevron-up" 
  onClick={()=>{
    setCount(count+1)
  }}
  />
  <div className="number">
    {count}
  </div>
  <div className="chevron chevron-down"
    onClick={()=>{
    setCount(count-1)
  }}></div>
</div>
  )
}

export default CounterV2