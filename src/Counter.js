import useCounter from "./hooks/useCounter"
import React from 'react'
const Counter = () => {
  const [counter, increment, subtract, reset] = useCounter(0)
  return (
  <section>
    <h1>counter</h1>
    <h2>{counter}</h2>
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={subtract}>subtract</button>
      <button onClick={reset}>reset</button>
    </div>
  </section>
  )
  
}
export default Counter