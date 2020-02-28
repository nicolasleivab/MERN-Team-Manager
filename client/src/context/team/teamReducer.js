import {
  GET_TEAMS,
  CLEAR_TEAMS,
  ADD_TEAM,
  TEAM_ERROR,
  DELETE_TEAM,
  SET_CURRENT_TEAM,
  CLEAR_CURRENT_TEAM,
  UPDATE_TEAM
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
        loading: false
      };
    case ADD_TEAM:
      return {
        ...state,
        teams: [action.payload, ...state.teams],
        loading: false
      };
    case UPDATE_TEAM:
      return {
        ...state,
        teams: state.teams.map(team =>
          team._id === action.payload._id ? action.payload : team
        ),
        loading: false
      };
    case DELETE_TEAM:
      return {
        ...state,
        teams: [...state.teams.filter(team => team._id !== action.payload._id)],
        loading: false
      };
    case CLEAR_TEAMS:
      return {
        ...state,
        teams: [],
        filtered: null,
        error: null,
        currentTeam: null
      };
    case SET_CURRENT_TEAM:
      return {
        ...state,
        currentTeam: action.payload
      };
    case CLEAR_CURRENT_TEAM:
      return {
        ...state,
        currentTeam: null
      };
    case TEAM_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
