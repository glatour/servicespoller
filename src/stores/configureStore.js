import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/reducers';

const initialState = {
  count: 3,
  services: [
    {
      url: '/api/data',
      data: {},
    }
  ],
  settings: {
    openState: false,
    interval: 5000
  }
}

const loggerMiddleware = createLogger();

export default function () {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(
      thunkMiddleware
      //loggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
  )
}
