import React from 'react';
import Main from './views/Main';
import Details from './views/Details';
import Edit from './views/Edit';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Details path="/api/product/:id" />
        <Edit path="/api/product/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
