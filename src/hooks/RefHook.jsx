import React, { useRef, useState } from 'react';

const RefHook = () => {
  const [name, setName] = useState('');

  const inputRef = useRef(null);
  // const inputRef = { current: null };

  console.log(inputRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputRef.current.value);
  };

  return (
    <div>
      <h2>useRefHook</h2>
      <p>{name}</p>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your name' ref={inputRef} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RefHook;
