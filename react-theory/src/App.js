import React, { Component } from 'react';
import Car from './Car/Car';
import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: 2016 },
        { name: 'Mazda', year: 2010 },
      ],
      pageTitle: 'React components',
      showCars: false,
      clicked: false,
    };
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };

  handleChangeName = (name, index) => {
    const cars = this.state.cars;
    cars[index].name = name;

    this.setState({ cars });
  };

  handleRemoveCar = (index) => {
    const filteredCars = this.state.cars.filter(
      (el, ind) => ind !== index
    );

    this.setState({ cars: filteredCars });
  };

  toogleCarsHandle = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.pageTitle}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <hr />

        <button
          className="toogle-btn"
          onClick={this.toogleCarsHandle}
        >
          Toogle Cars
        </button>
        <button
          className="toogle-btn"
          onClick={() =>
            this.setState({ clicked: !this.state.clicked })
          }
        >
          Changed clicked
        </button>
        <div className="cars">
          {this.state.showCars &&
            this.state.cars.map((car, index) => (
              <ErrorBoundary key={index}>
                <Car
                  index={index}
                  name={car.name}
                  year={car.year}
                  onChangeName={(event) =>
                    this.handleChangeName(event.target.value, index)
                  }
                  removeCar={this.handleRemoveCar.bind(this, index)}
                />
              </ErrorBoundary>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
