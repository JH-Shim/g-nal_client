import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Nav from './components/common/Nav';
import Hamburger from './components/common/Hamburger';
import Footer from './components/common/Footer';
import PageIndex from './pages/PageIndex';
import PageSignIn from './pages/PageSignIn';
import PageMyPage from './pages/PageMyPage';
import PageEasterEgg from './pages/PageEasterEgg';
import { fakeData } from './fakeData/fakeData';

axios.defaults.withCredentials = true;

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isHamburger, setIsHamburger] = useState(false);

  const resetState = () => {
    setIsLogin(false);
  };

  return isLogin ? (
    <Router>
      <Nav isHamburger={isHamburger} setIsHamburger={setIsHamburger} />
      <Hamburger isHamburger={isHamburger} />
      <Switch>
        <Route exact={true} path="/">
          <PageIndex />
        </Route>
        <Route path="/signin">
          <PageSignIn />
        </Route>
        <Route path="/mypage">
          <PageMyPage />
        </Route>
        <Route path="/easteregg">
          <PageEasterEgg />
        </Route>
        {/* <Route path="/">
            <PageMain />
          </Route> */}
      </Switch>
      <Footer />
    </Router>
  ) : (
    <div>isLogin false</div>
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
