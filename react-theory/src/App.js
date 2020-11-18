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
    counter: 0,
  };

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value,
    });
  };

  render() {
    const appStyle = {
      div: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '50%',
        height: '100vh',
        margin: '0 auto',
      },
      h1: {
        color: 'blue',
      },
    };

    const inputValue = React.createRef();
    const cars = this.state.cars;

    return (
      <div style={appStyle.div}>
        <h1 style={appStyle.h1}>{this.state.pageTitle}</h1>
        <div>
          <input
            type="text"
            ref={inputValue}
            onChange={this.handleInput}
          />
          <button
            onClick={this.changeTitleHandler.bind(this, 'Home page')}
          >
            Change title
          </button>
        </div>
        <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler}
        />
        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={this.changeTitleHandler}
        />
        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTitle={this.changeTitleHandler}
        />
      </div>
    );
  }
}

export default App;
