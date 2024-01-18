import React from 'react';

const ChildComponent = ({ click }) => {
  console.log('Child Component Rendering');
  return (
    <>
      <button onClick={click}>Click Me</button>
    </>
  );
};

export default React.memo(ChildComponent);
