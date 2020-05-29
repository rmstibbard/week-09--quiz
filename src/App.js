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

import FourOhFour from './components/FourOhFour';

function App() {
  return (
    <Router>
      <Fragment>

        <Switch>

          <Route exact path="/" component={Home} />

          <Route exact path="/multiplier">
            <Multiplier x={5} y={7} />
          </Route>

          <Route exact path="/even-clicks" component={EvenClicks} />

          <Route exact path="/count-by">
            <CountBy step={5} />
          </Route>

          <Route exact path="/hide-me" component={HideMe}>Blah Blah Blah</Route>

          <FourOhFour />

        </Switch>

      </Fragment>
    </Router >
  );
}

export default App;