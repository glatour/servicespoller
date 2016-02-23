import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/reducers';

const initialState = {
  count: 1,
  services: [
    {
      url: 'http://api.tvmaze.com/search/shows?q=batman',
      data: {},
    }
  ],
  settings: {
    openState: false,
    interval: 1000
  }
}

const loggerMiddleware = createLogger();

export default function () {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
  )
}
