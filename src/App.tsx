import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import Feedback from './pages/Feedback';
import News from './pages/News';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Subjects from './pages/Subjects';
import Teachers from './pages/Teachers';
import AuthRoute from './routes/AuthRoute';
import PublicRoute from './routes/PublicRoute';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Switch>
        <AuthRoute exact path="/signin" Component={Signin} />
        <AuthRoute exact path="/signup" Component={Signup} />
        <PublicRoute exact path="/" Component={News} />
        <PublicRoute exact path="/teachers" Component={Teachers} />
        <PublicRoute exact path="/subjects" Component={Subjects} />
        <PublicRoute exact path="/feedback" Component={Feedback} />
      </Switch>
    </Router>
  );
}

export default App;
