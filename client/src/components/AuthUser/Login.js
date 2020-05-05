import React, { useState, useLayoutEffect, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import Alert from "./Alert";
import loginPng from "../assets/img/login.jpg";
import useWindowSize from "../assets/hooks/useWindowSize";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import styles from "./Register.module.css";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authtContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authtContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "Red");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill out all fields", "Red");
    } else {
      loginUser(user);
    }
  };

  const [width, height] = useWindowSize();

  return (
    <div className={styles.Login}>
      {width > 800 && (
        <div>
          <img src={loginPng} alt="LoginPng" width="220" />
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: 0,
        }}
      >
        <p className={styles.title}>Member Login</p>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={onSubmit}
        >
          <Alert />
          <div
            style={{
              position: "relative",
              height: "fitContent",
              width: "fitContent",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              required="required"
              onChange={onChange}
              maxLength={35}
              style={{ paddingLeft: 30 }}
            />
            <EmailIcon className={styles.uiIcon} />
          </div>
          <div
            style={{
              position: "relative",
              height: "fitContent",
              width: "fitContent",
            }}
          >
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              required="required"
              onChange={onChange}
              maxLength={35}
              style={{ paddingLeft: 30 }}
            />
            <LockIcon className={styles.uiIcon} />
          </div>
          <input type="submit" value="LOGIN" className={styles.btnGray} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <div>
              <p style={{ color: "#555", fontSize: 14, marginRight: 10 }}>
                New user?
              </p>
            </div>
            <div>
              <Link to="/register" className={styles.signUp}>
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
