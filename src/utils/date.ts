import { differenceInCalendarWeeks } from 'date-fns';

export const diffWeeks = (currentDay: Date, previousDay: Date): number => {
  return differenceInCalendarWeeks(new Date(currentDay), new Date(previousDay));
};
