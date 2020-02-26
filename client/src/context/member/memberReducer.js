import {
  ADD_MEMBER,
  DELETE_MEMBER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_MEMBER,
  FILTER_MEMBERS,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload]
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: [
          ...state.members.filter(member => member.id !== action.payload.id)
        ]
      };
    default:
      return state;
  }
};
