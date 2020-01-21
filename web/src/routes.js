import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ??? from './containers/???';
import Dashboard from './containers/Dashboard';



export default (
  <Route>
    <Route path="/" component={???}>
      <IndexRoute component={Dashboard} />
      <Route path="/???" component={???} />

    </Route>
    <!-- Default page -->
    <Route path="/???" component={???} />
  </Route>
);
