import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert) {
    return null;
  }

  return (
    <div
      className={`alert alert-${
        alert.type || 'secondary'
      } alert-dismissible fade show`}
      role="alert"
    >
      <strong>
        {alert.type[0].toUpperCase() + alert.type.slice(1)}:&nbsp;
      </strong>
      {alert.text}!
      <button
        type="button"
        className="close"
        onClick={hide}
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
