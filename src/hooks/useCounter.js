import { useState } from "react";

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter(counter + 1);
  }
  function subtract() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }

  return [counter, increment, subtract, reset];
};

export default useCounter;
