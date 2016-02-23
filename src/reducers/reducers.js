import { combineReducers } from 'redux'
import jsonPath from 'JSONPath'

function count (state = {}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
};

import {DATA_FETCHED, DATA_ERROR, DATA_CHANGE_URL, SERVICES_ADD, SERVICES_REMOVE, DATA_EXTRACT_PATH} from '../actions/services'
function services(state = {}, action){
  switch (action.type) {
    case DATA_FETCHED:
      state = state.slice(0)
      state[action.index]._data = action.data
      state[action.index].data = extractData(state[action.index]._data, state[action.index].path)
      return state
    case DATA_CHANGE_URL:
      state = state.slice(0)
      state[action.index].url = action.url
      return state
    case SERVICES_ADD:
      state = state.slice(0)
      state.push({url: '', data: {}})
      return state
    case SERVICES_REMOVE:
      state = state.slice(0)
      state.splice(action.index, 1)
      return state
    case DATA_EXTRACT_PATH:
      state = state.slice(0)
      state[action.index].path = action.path
      state[action.index].data = extractData(state[action.index]._data, state[action.index].path)
      return state
    default:
      return state
  }
}

import {SETTINGS_TOGGLE, SETTINGS_SET_INTERVAL} from '../actions/settings'
function settings(state = {}, action){
  switch (action.type) {
    case SETTINGS_TOGGLE:
      state = Object.assign({}, state)
      state.openState = !state.openState
      return state
    case SETTINGS_SET_INTERVAL:
      state = Object.assign({}, state)
      if(!isNaN(action.interval))
        state.interval = parseInt(action.interval)
      return state
    default:
      return state
  }
}

function extractData(data, path){
  let extractedData = data;
  if(data !== '')
    extractedData = JSON.parse(data)
  if(!!path && path != '')
    extractedData = jsonPath({path: path, json: extractedData})
  return extractedData
}

const rootReducer = combineReducers({
  services,
  count,
  settings
})

export default rootReducer
