import React, { useReducer } from 'react';
import uuid from 'uuid';
import MemberContext from './memberContext';
import memberReducer from './memberReducer';
import {
  ADD_MEMBER,
  DELETE_MEMBER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_MEMBER,
  FILTER_MEMBERS,
  CLEAR_FILTER
} from '../types';

const MemberState = props => {
  const initialState = {
    members: [
      {
        id: 1,
        role: 'Technical Lead',
        name: 'Nicolas Leiva',
        email: 'nicolasleivab@gmail.com',
        phone: '9999999'
      },
      {
        id: 2,
        role: 'Senior SE',
        name: 'Wojak',
        email: 'wojak@wojak.com',
        phone: '9799999'
      },
      {
        id: 3,
        role: 'Junior SE',
        name: 'Jose',
        email: 'jose@jose.com',
        phone: '3322223'
      }
    ]
  };
  const [state, dispatch] = useReducer(memberReducer, initialState);

  // Add Member

  // Delete Member

  // Set Current Member

  // Clear Current Member

  // Update Member

  // Filter Members

  // Clear Filter

  return (
    <MemberContext.Provider
      value={{
        members: state.members
      }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberState;
