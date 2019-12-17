import React, { useState } from 'react';
import TBHComponent from './TBHooksComponent';

const TBHContainer = () => {
  const [value, setValue] = useState(10);

  const handleChange = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h3>Top-Bottom Functional Container</h3>
      <TBHComponent value={value} changeState={handleChange} />
    </>
  );
};

export default TBHContainer;
