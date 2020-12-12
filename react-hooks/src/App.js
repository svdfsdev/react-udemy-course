import React from 'react';
import { Alert } from './alert/Alert';
import { AlertProvider } from './alert/AlertContext';
import { Main } from './Main';

const App = () => {
  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
};

export default App;
