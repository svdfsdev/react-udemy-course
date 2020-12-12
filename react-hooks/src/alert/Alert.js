import React from 'react';
import { useAlertContext } from '../alert/AlertContext';

export const Alert = () => {
  const { visible } = useAlertContext();

  if (!visible) {
    return null;
  }

  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>Danger!</strong> It's so important message!
    </div>
  );
};
