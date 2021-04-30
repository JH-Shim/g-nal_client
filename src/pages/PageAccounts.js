import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../components/accounts/SignIn';
import SingUp from '../components/accounts/SignUp';

function PageSignIn({}) {
  return (
    <Router>
      <Switch>
        <Route path="/accounts/signin">
          <SignIn />
        </Route>
        <Route path="/accounts/signup">
          <SingUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default PageSignIn;
