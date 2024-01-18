import React from 'react';

const NameComp = ({ name }) => {
  console.log('Name Component Render');
  return <h3>{name}</h3>;
};

export default React.memo(NameComp);
