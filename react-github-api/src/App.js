import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/alertState';
import { GithubState } from './context/github/githubState';
import { Info } from './pages/Info';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';

function App() {
  const alert = {
    type: 'warning',
    text: "It's important message",
  };

  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={alert} />
            <Switch>
              <Route path="/info" component={Info} />
              <Route path="/profile/:name" component={Profile} />
              <Route path="/" component={Main} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
