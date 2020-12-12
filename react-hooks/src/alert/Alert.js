import React from 'react';
import { useAlertContext } from '../alert/AlertContext';

export const Alert = () => {
  const { visible, hide, text } = useAlertContext();

  if (!visible) {
    return null;
  }

  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      onClick={hide}
      role="alert"
    >
      <strong>Danger!</strong> {text}
    </div>
  );
};
