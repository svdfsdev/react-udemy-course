import { ALERT_HIDE, ALERT_SHOW } from '../types';

export const alertReducer = (state, action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return action.payload;

    case ALERT_HIDE:
      return null;

    default:
      return state;
  }
};
