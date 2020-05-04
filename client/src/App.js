import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./pages/Home/Home";
import Register from "./components/AuthUser/Register";
import Login from "./components/AuthUser/Login";
import PrivateRoute from "./routing/PrivateRouting";
import MemberState from "./context/member/MemberState";
import TeamState from "./context/team/TeamState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <TeamState>
        <MemberState>
          <AlertState>
            <Router>
              <Fragment>
                <NavBar />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </Fragment>
            </Router>
          </AlertState>
        </MemberState>
      </TeamState>
    </AuthState>
  );
}

export default App;
