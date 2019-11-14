import React, { useState } from 'react';

const UDHComponent = props => {
  const [state1, setState1] = useState(false);

  return (
    <div>
      <div>{state1.toString()}</div>
      <button onClick={() => {setState1(!state1);}}>Change Component State</button>
      <div style={{ paddingTop: 20 }}>Parent State: {props.value}</div>
      <button onClick={props.changeState}>Increase Parent State</button>
    </div>
  );
};

export default UDHComponent;
