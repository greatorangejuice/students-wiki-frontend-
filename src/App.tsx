import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TestPage from './routes/test-page';
import TestComponent from './components/test-component';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <TestPage />
        <TestComponent />
      </Route>
    </Switch>
  );
}

export default App;
