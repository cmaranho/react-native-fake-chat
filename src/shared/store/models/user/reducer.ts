import produce from 'immer';
import { handleActions } from 'redux-actions';

import { State, Types } from './types';
import { diffWeeks } from '~/utils/date';

type Actions = State;

const defaultState: State = {
  currentDate: undefined,
  currentWeek: 0,
  height: 167,
  indicateWeight: {
    max: 75,
    min: 71,
  },
  initialDate: new Date(2020, 4, 5, 12),
  name: 'Alexa',
  preGestationalImc: 21.51,
  preGestationalWeight: 60,
};

const reducer = handleActions<State, Actions>(
  {
    [Types.SAVE_DATA]: (state, action) => ({
      ...state,
      ...action.payload,
      lastUpdate: new Date(),
    }),
    [Types.SET_CURRENT_WEEK]: (state, action) =>
      produce(state, (draft) => {
        draft.currentDate = action.payload.currentDate;
        draft.currentWeek = diffWeeks(
          action.payload.currentDate!,
          draft.initialDate!,
        );
      }),
  },
  defaultState,
);

export default reducer;
