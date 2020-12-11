import React, { useState, useEffect } from 'react';

const App = () => {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // console.log('render');
  // useEffect(() => {
  //   console.log('useEffect render');
  // });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => console.log('clean type');
  }, [type]);

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log('component did mount');

    window.addEventListener('mousemove', mouseMoveHandler);

    return () =>
      window.removeEventListener('mousemove', mouseMoveHandler);
  }, []);

  return (
    <div>
      <h1>Source: {type}</h1>
      <button
        onClick={() => setType('users')}
        type="button"
        className="btn btn-primary"
      >
        Users
      </button>
      <button
        onClick={() => setType('todos')}
        type="button"
        className="btn btn-dark"
      >
        Todos
      </button>
      <button
        onClick={() => setType('posts')}
        type="button"
        className="btn btn-warning"
      >
        Posts
      </button>
      <hr />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
};

export default App;
