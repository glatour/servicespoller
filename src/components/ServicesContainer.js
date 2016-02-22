import React from 'react'
import {connect} from 'react-redux'
import JsonDisplay from './JsonDisplay'
import ServiceContainer from './ServiceContainer'
import {changeServiceUrl, addService, removeService, forceFetchData, extractPath} from '../actions/services'

const mapStateToProps = state => ({ services: state.services})
const mapDispatchToProps = (dispatch) => {
  return {
    changeServiceUrl: function(index, url){
      dispatch(changeServiceUrl(index, url))
      dispatch(forceFetchData(index))
    },
    addService: function(url){
      dispatch(addService(url))
    },
    removeService: function(index){
      dispatch(removeService(index))
    },
    extractPath: function(index, path) {
      dispatch(extractPath(index, path))
    }
  }
}

class ServicesContainer extends React.Component{
  render () {
    const {services, changeServiceUrl, addService, removeService, extractPath} = this.props

    return (<div>
              {this.props.services.map(function(service, i){
                return <ServiceContainer  key={i}
                                          index={i}
                                          url={ service.url }
                                          data={ service.data}
                                          changeUrl={ changeServiceUrl }
                                          removeService={ removeService }
                                          extractPath={ extractPath } />
              })}
              <div className="button" onClick={ addService }>add</div>
            </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesContainer)
