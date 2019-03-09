import createReducer from '../redux/create-reducer';
import { AUTH_USER, REGISTER_USER } from '../action-types';

const authUser = (name) => (dispatch) => {
  dispatch({ type: AUTH_USER, payload: name });
};

const registerUser = (callback) => (dispatch) => {
  dispatch({ type: REGISTER_USER });

  callback();
};

export const actions = {
  authUser,
  registerUser,
};

const INITIAL_STATE = {
  isAuthenticated: false,
  name: '',
  isRegistered: false,
};

const ACTION_HANDLERS = {
  [AUTH_USER]: (state, { payload }) => ({
    ...state,
    isAuthenticated: true,
    name: payload,
  }),
  [REGISTER_USER]: (state) => ({ ...state, isRegistered: true }),
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
