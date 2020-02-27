import {
  ADD_MEMBER,
  DELETE_MEMBER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_MEMBER,
  FILTER_MEMBERS,
  CLEAR_FILTER
} from '../types';
import { act } from 'react-dom/test-utils';

export default (state, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload]
      };
    case UPDATE_MEMBER:
      return {
        ...state,
        members: state.members.map(member =>
          member.id === action.payload.id ? action.payload : member
        )
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: [
          ...state.members.filter(member => member.id !== action.payload.id)
        ]
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
