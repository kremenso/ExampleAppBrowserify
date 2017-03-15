window.React    = require('react');
window.ReactDOM = require('react-dom');

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { createStore } from 'redux';
import rootReducer from 'reducers';
import $ from 'jquery';

const store = createStore(rootReducer);

$(document).ready(function() {
  ReactDOM.render(
  <Provider store={store} className='row'>
    <Router history={browserHistory} routes={routes} />
  </Provider>
   ,document.getElementById('body'));
});
