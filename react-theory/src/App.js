import React from 'react';
import './App.scss';
import Car from './Car/Car';

const App = () => {
  const appStyle = {
    div: {
      textAlign: 'center',
    },
    h1: {
      color: 'blue',
    },
  };

  return (
    <div style={appStyle.div}>
      <h1 style={appStyle.h1}>Hello World!</h1>
      <Car />
    </div>
  );
};

export default App;
