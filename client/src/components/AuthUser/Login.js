import React, { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <p className={styles.title}>Account Login</p>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <label htmlFor='email'>{email !== '' && 'Email'}</label>
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          required='required'
          onChange={onChange}
        />
        <label htmlFor='password'>{password !== '' && 'Password'}</label>
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          required='required'
          onChange={onChange}
        />
        <input type='submit' value='Login' className={styles.btnGray} />
      </form>
    </div>
  );
};

export default Register;
