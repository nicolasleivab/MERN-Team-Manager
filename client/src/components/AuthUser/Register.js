import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import Alert from "./Alert";
import styles from "./Register.module.css";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authtContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { registerUser, error, clearErrors, isAuthenticated } = authtContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "Red");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      setAlert("Missing Fields", "Red");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "Red");
    } else {
      registerUser(user);
    }
  };

  return (
    <div className={styles.Register}>
      <p className={styles.title}>Account Register</p>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <Alert />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          required="required"
          onChange={onChange}
          maxLength={35}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          required="required"
          onChange={onChange}
          maxLength={35}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          required="required"
          onChange={onChange}
          minLength="6"
          maxLength={35}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          required="required"
          onChange={onChange}
          minLength="6"
          maxLength={35}
        />
        <input type="submit" value="Register" className={styles.btnGray} />
        <Link to="/login" className={styles.signUp}>
          Sign in
        </Link>
      </form>
    </div>
  );
};

export default Register;
