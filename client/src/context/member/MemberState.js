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
        role: 'CEO',
        name: 'Froncio',
        email: 'froncio@lol.com',
        phone: '9999999'
      },
      {
        id: 2,
        role: 'Developer',
        name: 'Wojak',
        email: 'sminem@lol.com',
        phone: '9799999'
      },
      {
        id: 3,
        role: 'Developer',
        name: 'Frojack',
        email: 'asd2@lol.com',
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
