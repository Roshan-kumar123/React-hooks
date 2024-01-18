import React from 'react';

const ResultComp = ({ result }) => {
  console.log('Result Component Render');
  return <h3>{result}</h3>;
};

export default React.memo(ResultComp);
