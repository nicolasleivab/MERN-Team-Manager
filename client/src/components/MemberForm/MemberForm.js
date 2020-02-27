import React, { useState, useContext, useEffect } from 'react';
import MemberContext from '../../context/member/memberContext';
import styles from './MemberForm.module.css';
import { CLEAR_CURRENT, CLEAR_FILTER } from '../../context/types';

const MemberForm = () => {
  const memberContext = useContext(MemberContext);
  const {
    addMember,
    current,
    clearCurrent,
    updateMember,
    filtered,
    filterMembers,
    clearFilter
  } = memberContext;

  useEffect(() => {
    if (current !== null) {
      setMember(current);
    } else {
      setMember({
        name: '',
        email: '',
        phone: '',
        role: ''
      });
    }
  }, [memberContext, current]);

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
    //defaut role
    if (member.role === '') {
      member.role = 'Developer';
    }
    //call methods from context conditionally
    if (current !== null) {
      updateMember(member);
      if (filtered !== null) {
        updateMember(filtered);
        filterMembers(filtered.find(el => el.name === member.name).name);
      }
    } else {
      addMember(member);
      clearFilter();
    }
    //reset form
    clearCurrent();
  };
  return (
    <div style={{ paddingTop: 100 }}>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <p>{current ? 'Edit Team Member' : 'Add Team Member'}</p>
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
        <input
          type='submit'
          value={current ? 'Update Member' : 'Add Member'}
          className={current ? styles.btnGreen : styles.btnBlue}
        />
        {current && (
          <input
            type='submit'
            value='Clear'
            className={styles.btnGray}
            onClick={() => clearCurrent()}
          />
        )}
      </form>
    </div>
  );
};

export default MemberForm;
