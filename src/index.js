import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Provider } from 'react-redux'

import configureStore from './stores/configureStore'
let store = configureStore();

// store.subscribe(() =>
//   console.log(store.getState()));

ReactDOM.render(<Provider store={ store }>
    <App />
  </Provider>, document.getElementById('app'));
