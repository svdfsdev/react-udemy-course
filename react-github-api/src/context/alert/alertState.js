import React, { useReducer } from 'react';
import { ALERT_HIDE, ALERT_SHOW } from '../types';
import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const hide = () => dispatch({ type: ALERT_HIDE });
  const show = (text, type = 'secondary') => {
    dispatch({ type: ALERT_SHOW, payload: { text, type } });

    setTimeout(() => hide(), 3000);
  };

  return (
    <AlertContext.Provider value={{ hide, show, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
