import React, { useState } from 'react';
import styles from './MemberForm.module.css';

const MemberForm = () => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    phone: '',
    role: ''
  });
  const { name, email, phone, role } = member;

  const onChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ paddingTop: 100 }}>
      <form className={styles.formContainer}>
        <p>Add Team Member</p>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Phone'
          name='phone'
          value={phone}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Role'
          name='role'
          value={role}
          onChange={onChange}
        />
        <div>
          <input type='submit' value='Add Member' className={styles.btnBlue} />
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
