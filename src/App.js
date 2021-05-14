import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import Menu from './components/common/Menu';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import PageIndex from './pages/PageIndex';
import PageAccounts from './pages/PageAccounts';
import PageMyPage from './pages/PageMyPage';
import PageEasterEgg from './pages/PageEasterEgg';
import PagePlace from './pages/PagePlace';
import PageUser from './pages/PageUser';
import { fakeData } from './fakeData/fakeData';

// axios.defaults.withCredentials = true; // ! check 위치

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    if (sessionStorage.accessToken) {
      setIsLogin(true);
      // alert(''); // ! check
    }
    // alert(''); // ! check
  }, []);

  return (
    <Router>
      <Menu
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isMenu={isMenu}
        setIsMenu={setIsMenu}
      />
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} setIsMenu={setIsMenu} />
      <Switch>
        <Route exact={true} path="/">
          {isLogin ? <PageIndex /> : <Redirect to="/accounts/signin" />}
        </Route>
        <Route path="/accounts">
          <PageAccounts isLogin={isLogin} setIsLogin={setIsLogin} />
        </Route>
        <Route path="/mypage">
          <PageMyPage />
        </Route>
        <Route path="/easteregg">
          <PageEasterEgg />
        </Route>
        <Route path="/:account/:placeId">
          <PagePlace />
        </Route>
        <Route path="/:account">
          <PageUser />
        </Route>
      </Switch>
      {window.innerWidth > 700 ? (
        <Footer />
      ) : (
        <div className="display_none"></div>
      )}
    </Router>
  );
}

export default App;

/* react init

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
