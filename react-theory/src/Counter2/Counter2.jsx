import React from 'react';
import { ClickedContext } from '../App';

export const Counter2 = (props) => {
  return (
    <div style={{ border: '1px solid #ccc' }}>
      <h3>Counter2</h3>
      <ClickedContext.Consumer>
        {(value) => value && <p>Clicked</p>}
      </ClickedContext.Consumer>
    </div>
  );
};
