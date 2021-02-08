export enum Types {
  SAVE_DATA = '@user/SAVE_DATA',
  UPDATE_DATA = '@user/UPDATE_DATA',
  SET_CURRENT_WEEK = '@user/SET_CURRENT_WEEK',
}

type IndicateWeight = {
  min: number;
  max: number;
};

export interface State {
  preGestationalWeight: number;
  currentWeek?: number;
  preGestationalImc: number;
  height: number;
  name: string;
  initialDate: Date;
  currentDate?: Date;
  indicateWeight: IndicateWeight;
  lastUpdate?: Date;
}
