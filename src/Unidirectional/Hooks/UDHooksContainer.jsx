import React, { useState } from 'react';
import UDHComponent from './UDHooksComponent';

const UDHContainer = () => {
  const [value, setValue] = useState(10);

  const handleChange = () => {
    setValue(value + 1);
  };

  return (
    <div style={{paddingTop: 20}}>
      <h3>Unidirectional Functional Container</h3>
      <UDHComponent value={value} changeState={handleChange} />
    </div>
  );
};

export default UDHContainer;
