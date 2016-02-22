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
        fetch(url)
          .then(response => response.json())
          .then(json => dispatch(dataFetched(i, url, json)))
      })(i)
    }
  }
}

export function forceFetchData(index) {
  return function (dispatch, getState) {
    const services = getState().services;
    const url = services[index].url;
    fetch('/api/invoke/' + url)
      .then(response => {
        if(response.status === 200)
          return response.json()
        return null;
      })
      .then(json => dispatch(dataFetched(index, url, json)))
      .catch(e => console.log(e.message))
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
