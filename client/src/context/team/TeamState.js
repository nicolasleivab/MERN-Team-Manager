import React, { useReducer } from 'react';
import TeamContext from './teamContext';
import teamReducer from './teamReducer';
import axios from 'axios';
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

const TeamState = props => {
  const initialState = {
    teams: null,
    current: null,
    error: null,
    loading: true
  };
  const [state, dispatch] = useReducer(teamReducer, initialState);

  // Get teams
  const getTeams = async () => {
    try {
      const res = await axios.get('/api/teams');

      dispatch({
        type: GET_TEAMS,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: TEAM_ERROR, payload: err.response.msg });
    }
  };
  // Add team
  const addTeam = async team => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/teams', team, config);
      dispatch({ type: ADD_TEAM, payload: res.data });
    } catch (err) {
      dispatch({ type: TEAM_ERROR, payload: err.response.msg });
    }
  };

  // Delete team
  const deleteTeam = async team => {
    try {
      await axios.delete(`/api/teams/${team._id}`);

      dispatch({ type: DELETE_TEAM, payload: team });
    } catch (err) {
      dispatch({ type: TEAM_ERROR, payload: err.response.msg });
    }
  };

  // Update team
  const updateTeam = async team => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(`/api/teams/${team._id}`, team, config);
      dispatch({ type: UPDATE_TEAM, payload: res.data });
    } catch (err) {
      dispatch({ type: TEAM_ERROR, payload: err.response.msg });
    }
  };

  // Clear teams
  const clearTeams = () => {
    dispatch({ type: CLEAR_TEAMS });
  };

  // Set Current team
  const setCurrentTeam = team => {
    dispatch({ type: SET_CURRENT_TEAM, payload: team });
  };

  // Clear Current team
  const clearCurrentTeam = () => {
    dispatch({ type: CLEAR_CURRENT_TEAM });
  };

  return (
    <TeamContext.Provider
      value={{
        teams: state.teams,
        current: state.current,
        error: state.error,
        loading: state.loading,
        getTeams,
        addTeam,
        deleteTeam,
        setCurrentTeam,
        clearCurrentTeam,
        updateTeam,
        clearTeams
      }}
    >
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamState;
