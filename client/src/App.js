import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Register from './components/AuthUser/Register';
import Login from './components/AuthUser/Login';
import MemberState from './context/member/MemberState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <MemberState>
        <AlertState>
          <Router>
            <Fragment>
              <NavBar />
              <div style={{ width: '100%' }}>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </MemberState>
    </AuthState>
  );
}

export default App;
