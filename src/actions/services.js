var request = require('then-request');

export const DATA_FETCHED = 'DATA_FETCHED'
function dataFetched(index, url, json) {
  return {
    type: DATA_FETCHED,
    index: index,
    url: url,
    data: json
  }
}

export const DATA_ERROR = 'DATA_ERROR'
function dataFetchError(error) {
  return {
    type: DATA_ERROR,
    data: error
  }
}

export function fetchData() {
  return function (dispatch, getState) {
    const services = getState().services;
    for (var i = 0; i < services.length; i++) {
      (function(i) {
        const url = services[i].url;
        if(url !== ''){
          request('GET', '/api/invoke/' + url).done(function (res) {
            dispatch(dataFetched(i, url, res.getBody()))
          });
        }
      })(i)
    }
  }
}

export function forceFetchData(index) {
  return function (dispatch, getState) {
    const services = getState().services;
    const url = services[index].url;
    console.log(url);
    if(url !== ''){
      request('GET', '/api/invoke/' + url).done(function (res) {
        var b = res.getBody();
        dispatch(dataFetched(index, url, res.getBody()))
      });
    }
  }
}

export const DATA_CHANGE_URL = 'DATA_CHANGE_URL'
export function changeServiceUrl(index, url) {
  return {
    type: DATA_CHANGE_URL,
    index: index,
    url: url
  }
}

export const SERVICES_ADD = 'SERVICES_ADD'
export function addService(url) {
  return {
    type: SERVICES_ADD,
    url: url
  }
}

export const SERVICES_REMOVE = 'SERVICES_REMOVE'
export function removeService(index) {
  return {
    type: SERVICES_REMOVE,
    index: index
  }
}

export const DATA_EXTRACT_PATH = 'DATA_EXTRACT_PATH'
export function extractPath(index, path, viewport = 0) {
  return {
    type: DATA_EXTRACT_PATH,
    index: index,
    path: path,
    viewport: viewport
  }
}
