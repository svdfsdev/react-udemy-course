import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);

  const showAlertHandler = () => {
    setAlert((prev) => !prev);

    setTimeout(() => {
      setAlert((prev) => !prev);
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{ visible: alert, showAlertHandler }}
    >
      {children}
    </AlertContext.Provider>
  );
};
