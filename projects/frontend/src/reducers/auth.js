import * as actionTypes from '../actions/actionTypes';
import {updateObject } from '../config/utility';

const initialState = {
  token: null,
  error: null,
  loading: false,
  isAuthenticated: false
}

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    isAuthenticated: false,
    loading: true
  });
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    isAuthenticated: true,
    error: null,
    loading: false

  });
}

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    isAuthenticated: false,
    loading: false
  })
}

export const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    isAuthenticated: false
  })
}

const auth = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    default:
      return state;
  }
}

export default auth;