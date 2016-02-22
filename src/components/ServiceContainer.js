import React from 'react'
import JsonDisplay from './JsonDisplay'
import ContentEditable from './ContentEditable'

class ServiceContainer extends React.Component {
  render() {
    let { index, url, data, changeUrl, removeService } = this.props

    const extractPath = (path) => this.props.extractPath(this.props.index, path)

    const handleChange = function(e){
      changeUrl(this.props.index, e.target.value)
    }.bind(this)

    const handleRemoveService = (e) => {
      this.props.removeService(this.props.index);
    }

    return (<div className="service-container">
              <div className="service-container-url">
                <div className="service-container-url-input">
                  <input  type="text"
                          value={ url }
                          onChange={ handleChange }
                          className="u-full-width"
                          placeholder="url" />
                </div>
                <div className="service-container-url-actions">
                  <div className="button" onClick={ handleRemoveService }>remove</div>
                </div>
              </div>
              {/*<div className="row">
                <div className="nine columns">
                  <input  type="text"
                          value={ url }
                          onChange={ handleChange }
                          className="u-full-width"
                          placeholder="url" />
                </div>
                <div className="three columns">
                  <div className="button" onClick={ handleRemoveService }>remove</div>
                </div>
              </div>*/}
              <div className="service-container-json">
                <JsonDisplay  data={ data }
                              extractPath={ extractPath } />
              </div>
            </div>)
  }
}

export default ServiceContainer
