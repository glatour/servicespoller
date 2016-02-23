require('normalize.css');
require('styles/skeleton.less');
require('styles/App.less');

import React from 'react';
import ServicesContainer from './ServicesContainer';
import CountDisplay from './CountDisplay';
import Group from './Group';
import Counter from '../components/Counter';
import Poller from './Poller'
import Settings from './Settings'


class AppComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Service Monitor</h1>
          <Poller interval='5000' />
          <ServicesContainer />
        </div>
        <Settings />
      </div>
    );
  }
}

export default AppComponent;
