import React, { useEffect } from 'react';
import { useState } from 'react';

const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${count ? count : '/'}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

    return () => {
      console.log('Component will unmount');
    };
  }, [count]);

  const handleCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  };

  return (
    <div>
      <h2>useEffectHook with cleanup function</h2>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Rerun useEffect</button>

      {data instanceof Array ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
            </div>
          );
        })
      ) : (
        <h3>{data ? data.name : ''}</h3>
      )}
    </div>
  );
};

export default EffectHook;
