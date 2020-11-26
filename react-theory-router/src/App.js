import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import About from './About/About';
import Cars from './Cars/Cars';
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  state = { isLogedIn: false };

  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="customActiveClassName"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: '/cars',
                }}
              >
                Cars
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr />
        <div style={{ textAlign: 'center' }}>
          <h3>
            is Loged In is{' '}
            {this.state.isLogedIn.toString().toUpperCase()}
          </h3>
          <button
            onClick={() =>
              this.setState({ isLogedIn: !this.state.isLogedIn })
            }
          >
            Login
          </button>
        </div>
        <hr />
        {/* <Switch> */}
        <Route
          path="/"
          exact
          render={() => (
            <h1 style={{ textAlign: 'center' }}>Home Page</h1>
          )}
        />
        {this.state.isLogedIn && (
          <Route path="/about" component={About} />
        )}
        <Route path="/cars/" component={Cars} />
        <Route path="/cars/:name" component={CarDetail} />
        <Redirect to={'/'} />
        {/* <Route
            render={() => (
              <h1 style={{ textAlign: 'center', color: 'red' }}>
                404 not found
              </h1>
            )}
          /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
