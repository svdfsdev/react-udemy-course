import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car';

class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2016 },
      { name: 'Mazda', year: 2010 },
    ],
    pageTitle: 'React components',
    showCars: true,
  };

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
    const appStyle = {
      container: {
        textAlign: 'center',
      },
      cars: {
        width: '400px',
        margin: 'auto',
        paddingTop: '20px',
      },
      h1: {
        color: 'blue',
      },
    };

    return (
      <div style={appStyle.container}>
        <h1 style={appStyle.h1}>{this.state.pageTitle}</h1>
        <button onClick={this.toogleCarsHandle}>Toogle Cars</button>

        <div style={appStyle.cars}>
          {this.state.showCars &&
            this.state.cars.map((car, index) => (
              <Car
                key={index}
                name={car.name}
                year={car.year}
                onChangeName={(event) =>
                  this.handleChangeName(event.target.value, index)
                }
                removeCar={this.handleRemoveCar.bind(this, index)}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
