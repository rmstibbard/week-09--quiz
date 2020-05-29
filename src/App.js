import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './components/Home';
import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import Fragment from './components/Fragment';
import CountBy from './components/CountBy';
import HideMe from './components/HideMe';
import MinimumLength from './components/MinimumLength';

import FourOhFour from './components/FourOhFour';

function App() {
  return (
    <Router>
      <Fragment>

        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/multiplier/:x/:y" render={({ match }) => (
            <Multiplier
              x={match.params.x}
              y={match.params.y}
            />
          )} />

          <Route exact path="/even-clicks" component={EvenClicks} />

          <Route exact path="/count-by">
            <CountBy step={5} />
          </Route>

          <Route path="/count-by/:step" render={({ match }) => (
            <CountBy step={match.params.step} />
          )} />

          <Route exact path="/hide-me">
            <HideMe>Blah Blah</HideMe>
          </Route>

          <Route path="/minimum-length/:minLength" render={({ match }) => (
            <MinimumLength minLength={match.params.minLength} />
          )} />

          <FourOhFour />

        </Switch>

      </Fragment>
    </Router >
  );
}

export default App;
