import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import Home from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
