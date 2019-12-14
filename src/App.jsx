import React from 'react';
import { Router, Route } from 'react-router';
import Header from './Header';
import history from './Util/History';
import UDContainer from './1_TopBottom/TBContainer';
import UDHContainer from './1_TopBottom/Hooks/TBHooksContainer';
import APIContainer from './2_ContextAPI/APIContainer';
import ReduxContainer from './3_Redux/ReduxContainer';
import UseReducerContainer from './4_UseReducer/UseReducerContainer';

function App() {
  return (
    <div style={{paddingLeft: 5}}>
      <Router history={history}>
        <Header />
        <Route path="/Unidirectional" component={UDContainer} />
        <Route path="/UnidirectionalHooks" component={UDHContainer} />
        <Route path="/API" component={APIContainer} />
        <Route path="/Redux" component={ReduxContainer} />
        <Route path="/UseReducer" component={UseReducerContainer} />
      </Router>
    </div>
  );
}

export default App;
