import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import TestPage from 'routes/test-page';
import SignIn from 'routes/SignIn';
import SignUp from 'routes/SignUp';
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
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
