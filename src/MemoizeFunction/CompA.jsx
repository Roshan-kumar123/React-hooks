import React, { useMemo } from 'react';
import { useState } from 'react';
import ChildComponent from './CompB';
import { useCallback } from 'react';

const ParentComponent = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  // useCallback to memoize the handleClick function
  const handleClick = useCallback(() => {
    // Perform some operation
    console.log('handleClick running');
  }, [count]); // Dependency array: re-create the function only if count changes

  // with using useMemo

  // const handleClick = useMemo(() => {
  //   return function func() {
  //     // Perform some operation
  //     console.log('handleClick running');
  //   };
  // }, [count]);

  // without useCallback

  // const handleClick = () => {
  //   console.log('handleClick running');
  // };

  console.log('Parent Component Rendering');

  return (
    <div>
      <p>Addition Result: {add}</p>
      <button onClick={() => setAdd(add + 2)}>Add by 2</button>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <ChildComponent click={handleClick} />
    </div>
  );
};

export default ParentComponent;
