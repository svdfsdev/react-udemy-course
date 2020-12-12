import React from 'react';
import { useAlertContext } from './alert/AlertContext';

export const Main = () => {
  const { showAlertHandler } = useAlertContext();
  return (
    <>
      <h1>Hello at context example</h1>
      <button
        onClick={showAlertHandler}
        type="button"
        className="btn btn-success"
      >
        Show alert
      </button>
    </>
  );
};
