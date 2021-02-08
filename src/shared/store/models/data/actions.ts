import { createAction } from 'redux-actions';

import { Types, Data } from './types';

export const saveData = createAction(Types.SAVE_DATA, (data: Data[]) => ({
  data,
}));
