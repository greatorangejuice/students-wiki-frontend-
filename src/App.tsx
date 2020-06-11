import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import Feedback from 'pages/Feedback';
import News from 'pages/News';

import SignIn from 'pages/Auth/SignIn';
import SignUp from 'pages/Auth/SignUp';

import Subjects from 'pages/Subjects';
import Teachers from 'pages/Teachers';
import Teacher from 'pages/Teacher';
import AuthRoute from 'routes/AuthRoute';
import PublicRoute from 'routes/PublicRoute';
import Header from 'components/Header';
import GlobalStyle from 'assets/styles/GlobalStyles';

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Switch>
        <AuthRoute exact path="/sign-in" Component={SignIn} />
        <AuthRoute exact path="/sign-up" Component={SignUp} />
        <PublicRoute exact path="/" Component={News} />
        <PublicRoute exact path="/teachers" Component={Teachers} />
        <PublicRoute exact path="/teacher" Component={Teacher} />
        <PublicRoute exact path="/subjects" Component={Subjects} />
        <PublicRoute exact path="/feedback" Component={Feedback} />
      </Switch>
    </Router>
  );
}

export default App;
