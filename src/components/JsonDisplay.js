import React from 'react'
import ReactDOM from 'react-dom'
import ContentEditable from './ContentEditable'
import jsonPath from 'JSONPath'

class JsonDisplay extends React.Component {

  shouldComponentUpdate(nextProps){
    return this.props.data != nextProps.data
  }

  render(){
    const {url, data, extractPath} = this.props
    let extractedData = data
    let that = this;
    const handleChange = (e) => extractPath(e.target.value)

    return (<div className="json-display">
              <div className="json-display-path">
                  <input  type="text"
                          value={ url }
                          placeholder="extract path"
                          className="u-full-width"
                          onChange={ handleChange } />
              </div>
              <div className="json-display-json">
                <pre>{ JSON.stringify(extractedData, null, 2) }</pre>
              </div>
            </div>)
  }
}

export default JsonDisplay
