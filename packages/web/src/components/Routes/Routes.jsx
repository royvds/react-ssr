import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/" />
      </Switch>
    );
  }
}
