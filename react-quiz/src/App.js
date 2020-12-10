import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import { connect } from 'react-redux';
import Logout from './components/Logout/Logout';
import { autologin } from './store/actions/authActions';

class App extends Component {
  componentDidMount() {
    this.props.autologin();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" exact component={QuizList} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={QuizList} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autologin: () => dispatch(autologin()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
