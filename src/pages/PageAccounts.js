import React from 'react';
import {
  BrowserRouter as Router, // ! check shovel
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import SignIn from '../components/accounts/SignIn';
import SignUp from '../components/accounts/SignUp';
import Footer from '../components/common/Footer';

function PageAccounts({ isLogin, setIsLogin }) {
  // const match = useRouteMatch();
  const { path, url } = useRouteMatch();
  // ! Nesting Examples : https://reactrouter.com/web/example/nesting

  return (
    <div>
      <Switch>
        {/* <pre>{JSON.stringify(path, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(match, null, 2)}</pre> */}
        {/* <Route path={`${match.path}/signin`}> */}
        <Route path={`${path}/signin`}>
          <SignIn isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path={`${path}/signup`}>
          <SignUp />
        </Route>
      </Switch>
      {window.innerWidth <= 700 ? (
        <Footer />
      ) : (
        <div className="display_none"></div>
      )}
    </div>
  );
}

export default PageAccounts;
