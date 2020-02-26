import React, { useState, useContext } from 'react';
import MemberContext from '../../context/member/memberContext';
import styles from './MemberForm.module.css';

const MemberForm = () => {
  const memberContext = useContext(MemberContext);

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

  const onSubmit = e => {
    e.preventDefault();
    //call method from context
    if (member.role === '') {
      member.role = 'Developer';
    }
    memberContext.addMember(member);
    //reset form
    setMember({
      name: '',
      email: '',
      phone: '',
      role: ''
    });
  };
  return (
    <div style={{ paddingTop: 100 }}>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <p>Add Team Member</p>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          required='required'
          onChange={onChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          required='required'
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
