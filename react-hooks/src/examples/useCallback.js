import React, { useState, useCallback } from 'react';
import { ItemsList } from './ItemsList';

const App = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);
  const styles = { color: colored ? 'red' : 'black' };

  const generateCount = useCallback(() => {
    return new Array(count)
      .fill('')
      .map((_, i) => `empty string ${i} `);
  }, [count]);

  return (
    <>
      <h1 style={styles}>Computed property: {count}</h1>

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setCount((prevNumber) => prevNumber + 1)}
      >
        ADD
      </button>

      <button
        type="button"
        className="btn btn-warning"
        onClick={() => setColored((prevColor) => !prevColor)}
      >
        Change
      </button>
      <hr />
      <ItemsList getItems={generateCount} />
    </>
  );
};

export default App;
