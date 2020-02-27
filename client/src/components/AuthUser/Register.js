import React, { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <p className={styles.title}>Account Register</p>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <label htmlFor='name'>{name !== '' && 'Name'}</label>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          required='required'
          onChange={onChange}
        />
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
          type='text'
          placeholder='Password'
          name='password'
          value={password}
          required='required'
          onChange={onChange}
        />
        <label htmlFor='password2'>
          {password2 !== '' && 'Confirm Password'}
        </label>
        <input
          type='text'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          required='required'
          onChange={onChange}
        />
        <input type='submit' value='Register' className={styles.btnGray} />
      </form>
    </div>
  );
};

export default Register;
