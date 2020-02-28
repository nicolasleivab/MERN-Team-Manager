import React, { useReducer } from 'react';
import MemberContext from './memberContext';
import memberReducer from './memberReducer';
import axios from 'axios';
import {
  GET_MEMBERS,
  CLEAR_MEMBERS,
  ADD_MEMBER,
  MEMBER_ERROR,
  DELETE_MEMBER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_MEMBER,
  FILTER_MEMBERS,
  CLEAR_FILTER
} from '../types';

const MemberState = props => {
  const initialState = {
    members: null,
    current: null,
    filtered: null,
    error: null,
    loading: true
  };
  const [state, dispatch] = useReducer(memberReducer, initialState);

  // Get Members
  const getMembers = async () => {
    try {
      const res = await axios.get('/api/teamMembers');

      dispatch({
        type: GET_MEMBERS,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: MEMBER_ERROR, payload: err.response.msg });
    }
  };
  // Add Member
  const addMember = async member => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/teamMembers', member, config);
      dispatch({ type: ADD_MEMBER, payload: res.data });
    } catch (err) {
      dispatch({ type: MEMBER_ERROR, payload: err.response.msg });
    }
  };

  // Delete Member
  const deleteMember = member => {
    dispatch({ type: DELETE_MEMBER, payload: member });
  };

  // Clear Members
  const clearMembers = () => {
    dispatch({ type: CLEAR_MEMBERS });
  };

  // Set Current Member
  const setCurrent = member => {
    dispatch({ type: SET_CURRENT, payload: member });
  };

  // Clear Current Member
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Member
  const updateMember = member => {
    dispatch({ type: UPDATE_MEMBER, payload: member });
  };

  // Filter Members
  const filterMembers = text => {
    dispatch({ type: FILTER_MEMBERS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <MemberContext.Provider
      value={{
        members: state.members,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        getMembers,
        addMember,
        deleteMember,
        setCurrent,
        clearCurrent,
        updateMember,
        filterMembers,
        clearFilter,
        clearMembers
      }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberState;
