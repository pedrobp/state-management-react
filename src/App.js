import React from 'react';
import { Router, Route } from 'react-router';
import Header from './Header';
import history from './Util/History';
import UDContainer from './Unidirectional/UDContainer';
import UDHContainer from './Unidirectional/Hooks/UDHooksContainer';
import APIContainer from './ContextAPI/APIContainer';
import ReduxContainer from './Redux/ReduxContainer';
import UseReducerContainer from './UseReducer/UseReducerContainer';

function App() {
  return (
    <div>
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
