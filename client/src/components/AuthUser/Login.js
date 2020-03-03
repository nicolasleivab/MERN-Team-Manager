import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Alert from './Alert';
import styles from './Register.module.css';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authtContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authtContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'Red');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill out all fields', 'Red');
    } else {
      loginUser(user);
    }
  };

  return (
    <div>
      <p className={styles.title}>Account Login</p>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <Alert />
        <label htmlFor='email'>{email !== '' && 'Email'}</label>
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          required='required'
          onChange={onChange}
          maxLength={35}
        />
        <label htmlFor='password'>{password !== '' && 'Password'}</label>
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          required='required'
          onChange={onChange}
          maxLength={35}
        />
        <input type='submit' value='Login' className={styles.btnGray} />
      </form>
    </div>
  );
};

export default Register;
