export enum Types {
  SAVE_DATA = '@data/SAVE_DATA',
  UPDATE_DATA = '@data/UPDATE_DATA',
}

export type Data = { imc: number; week: number; weight: number };

export interface State {
  data: Data[];
  lastUpdate?: Date;
}
