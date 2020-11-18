const Car = (props) => {
  const { name, year, onChangeTitle } = props;
  const style = {
    car: {
      border: '1px solid grey',
      borderRadius: '6px',
      width: '150px',
      padding: '20px',
      margin: '0 auto',
    },
  };

  return (
    <div style={style.car}>
      <p>
        Car name: <strong>{name}</strong>
      </p>
      <p>
        Year: <strong>{year}</strong>
      </p>
      <button onClick={onChangeTitle.bind(this, name)}>Click</button>
    </div>
  );
};

export default Car;
