import React from 'react';
import UDContainer from './Unidirectional/UDContainer';
import UDHContainer from './Unidirectional/Hooks/UDHooksContainer';
import APIContainer from './ContextAPI/APIContainer';
import ReduxContainer from './Redux/ReduxContainer';

function App() {
  return (
    <div>
      <UDContainer />
      <UDHContainer />
      <APIContainer />
      <ReduxContainer />
    </div>
  );
}

//<UDContainer />
//<UDHContainer />
//<APIContainer />

export default App;
