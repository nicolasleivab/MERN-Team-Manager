import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import MemberState from './context/member/MemberState';
import './App.css';

function App() {
  return (
    <MemberState>
      <Router>
        <Fragment>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </MemberState>
  );
}

export default App;
