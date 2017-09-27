import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';

import Router from './components/Router/';

import './style.scss';

class PkgTest extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

PkgTest.propTypes = {};

PkgTest.defaultProps = {};

export default PkgTest;
