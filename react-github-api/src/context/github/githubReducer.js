import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from '../types';

export const githubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case SEARCH_USERS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};
