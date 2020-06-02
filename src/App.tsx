import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import TestPage from './routes/test-page';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <TestPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
