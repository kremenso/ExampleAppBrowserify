import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/app';
import HomeIndex from './pages/home_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeIndex} />
  </Route>
);
