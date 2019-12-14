import React, { useState } from 'react';
import Button from '../../Util/Button';

const UDHComponent = props => {
  const [state1, setState1] = useState(false);

  return (
    <>
      <div>{state1.toString()}</div>
      <Button onClick={() => {setState1(!state1);}} label="Change Local State" />

      <div>Parent State: {props.value}</div>
      <Button onClick={props.changeState} label="Increase Parent State" />
    </>
  );
};

export default UDHComponent;
