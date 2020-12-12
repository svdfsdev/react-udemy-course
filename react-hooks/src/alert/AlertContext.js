import React, { createContext, useContext, useReducer } from 'react';

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

const SHOW_ALERT = 'SHOW_ALERT';
const HIDE_ALERT = 'HIDE_ALERT';

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, visible: true, text: action.text };
    case HIDE_ALERT:
      return { ...state, visible: false };

    default:
      return state;
  }
};

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: '',
  });

  const show = (text) => dispatch({ type: SHOW_ALERT, text: text });
  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <AlertContext.Provider
      value={{ visible: state.visible, hide, show, text: state.text }}
    >
      {children}
    </AlertContext.Provider>
  );
};
