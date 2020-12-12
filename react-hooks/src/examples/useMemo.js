import React, { useState, useMemo, useEffect } from 'react';

const complexComputed = (number) => {
  let i = 0;

  while (i < 1000000000) {
    i++;
  }

  console.log('complex computed');

  return number * 2;
};

const App = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? 'red' : 'black',
    };
  }, [colored]);

  const changecolor = () => {
    setColored((prev) => !prev);
  };

  const computed = useMemo(() => complexComputed(number), [number]);

  useEffect(() => {
    console.log('styles changed');
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Computed property: {computed}</h1>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        ADD
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Subtract
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={changecolor}
      >
        Subtract
      </button>
    </>
  );
};

export default App;
