import './index.scss';
import  React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';

import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';


const store = configureStore();

//Load Course actions on page load
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory}
      routes={routes}
    />
  </Provider>,
  document.getElementById('app')
);
