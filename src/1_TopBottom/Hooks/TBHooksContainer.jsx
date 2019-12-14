import React, { useState } from 'react';
import UDHComponent from './TBHooksComponent';

const UDHContainer = () => {
  const [value, setValue] = useState(10);

  const handleChange = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h3>Unidirectional Functional Container</h3>
      <UDHComponent value={value} changeState={handleChange} />
    </>
  );
};

export default UDHContainer;
