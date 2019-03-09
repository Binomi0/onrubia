import createReducer from '../redux/create-reducer';
import { ADD_PARTICIPANT, START_GAME, GAME_WINNER } from '../action-types';

const addParticipant = (name) => (dispatch, getState) => {
  const participantsList = getState().game.participants;

  if (participantsList.length < 10) {
    dispatch({
      type: ADD_PARTICIPANT,
      payload: `${name}-${(Math.random() * 10000).toFixed(0)}`,
    });
  } else {
    dispatch(startGame());
  }
};

const startGame = () => (dispatch, getState) => {
  dispatch({ type: START_GAME });

  const bag = getState().game.participants;

  const winner = bag[Math.floor(Math.random() * bag.length)];

  dispatch({ type: GAME_WINNER, payload: winner });
};

export const actions = {
  addParticipant,
};

const INITIAL_STATE = {
  isStarted: false,
  participants: [],
  prize: 0,
  winner: '',
};

const ACTION_HANDLERS = {
  [ADD_PARTICIPANT]: (state, { payload }) => ({
    ...state,
    participants: [...state.participants, payload],
    prize: state.prize + 1,
  }),
  [START_GAME]: (state) => ({ ...state, isStarted: true }),
  [GAME_WINNER]: (state, { payload }) => ({ ...state, winner: payload }),
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
