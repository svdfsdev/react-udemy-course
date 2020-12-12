import React from 'react';
import { useAlertContext } from './alert/AlertContext';

export const Main = () => {
  const { show } = useAlertContext();
  return (
    <>
      <h1>Hello at context example</h1>
      <button
        onClick={show.bind(this, "It's so important text!")}
        type="button"
        className="btn btn-success"
      >
        Show alert
      </button>
    </>
  );
};
