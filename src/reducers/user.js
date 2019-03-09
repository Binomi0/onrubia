// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'AUTH_USER':
//       return { ...state, isAuthenticated: true };
//     default:
//       return state;
//   }
// };

// export default userReducer;

import createReducer from '../redux/create-reducer';
import { AUTH_USER } from '../action-types';

const authUser = () => (dispatch) => {
  dispatch({ type: AUTH_USER });
};

export const actions = {
  authUser,
};

const INITIAL_STATE = {
  isAuthenticated: false,
  name: 'Adolfo',
  isRegistered: false,
};
const ACTION_HANDLERS = {
  [AUTH_USER]: (state) => ({ ...state, isAuthenticated: true }),
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
