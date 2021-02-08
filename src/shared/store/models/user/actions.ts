import { createAction } from 'redux-actions';

import { Types } from './types';

type IndicateWeight = {
  min?: number;
  max?: number;
};

export interface State {
  preGestationalWeight?: number;
  currentWeek?: number;
  preGestationalImc?: number;
  height?: number;
  name?: string;
  initialDate?: Date;
  currentDate?: Date;
  indicateWeight?: IndicateWeight;
  lastUpdate?: Date;
}

export const user = createAction(Types.SAVE_DATA, (data: State) => ({
  ...data,
}));

export const setcurrentWeek = createAction(
  Types.SET_CURRENT_WEEK,
  (currentDate: Date) => ({
    currentDate,
  }),
);
