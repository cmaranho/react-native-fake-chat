import { handleActions } from 'redux-actions';

import { State, Types } from './types';

type Actions = State;

const defaultState: State = {
  data: [{ imc: 0, week: 6, weight: 0 }],
};

const reducer = handleActions<State, Actions>(
  {
    [Types.SAVE_DATA]: (state, action) => ({
      ...state,
      data: action.payload.data,
      lastUpdate: new Date(),
    }),
  },
  defaultState,
);

export default reducer;
