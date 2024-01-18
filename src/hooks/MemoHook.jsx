import { useEffect, useMemo, useState } from 'react';

const MemoHook = ({ inputNumber }) => {
  const [count, setCount] = useState(0);

  // with useMemo
  const result = useMemo(() => {
    console.log('Calculating...');
    // Some expensive calculation based on inputNumber and count
    return inputNumber * inputNumber;
  }, [inputNumber]);

  // Without useMemo

  // const calculate = () => {
  //   console.log('calculating...');
  //   return inputNumber * 4;
  // };

  // const result = calculate();

  return (
    <div>
      <h2>Memoization || useMemo</h2>
      <p>Input Number: {inputNumber}</p>
      <p>Count: {count}</p>
      <p>Input Number Square: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default MemoHook;
