import React, { useState } from 'react';

const calcInitialState = () => {
  console.log('calc Initial State');
  return {
    title: 'Counter',
    date: Date.now(),
  };
};

function App() {
  const [state, setCounter] = useState(calcInitialState);

  const add = () => {
    setCounter((prev) => {
      return { ...prev, date: prev.date + 1 };
    });
  };
  const substract = () => {
    setCounter((prev) => {
      return { ...prev, date: prev.date - 1 };
    });
  };

  return (
    <div>
      <h1>{`${state.title}: ${state.date}`}</h1>
      <button type="button" onClick={add} className="btn btn-primary">
        ADD
      </button>
      <button
        type="button"
        onClick={substract}
        className="btn btn-warning"
      >
        SUBSTRACT
      </button>
      <button
        type="button"
        onClick={() =>
          setCounter({
            ...state,
            title: 'New Title',
          })
        }
        className="btn btn-dark"
      >
        Change title
      </button>
      <hr />
      <pre>{JSON.stringify(state, null, 4)}</pre>
    </div>
  );
}

export default App;
