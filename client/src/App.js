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
import ModalState from "./context/modal/ModalState";
import setAuthToken from "./utils/setAuthToken";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Titillium Web", "Helvetica", "Arial", sans-serif',
    fontSize: 20,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    padding: 10,
  },
});

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ModalState>
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
      </ModalState>
    </MuiThemeProvider>
  );
}

export default App;
