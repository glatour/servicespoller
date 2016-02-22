//http://notjoshmiller.com/ajax-polling-in-react-with-redux/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import * as actions from './../actions/services'

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => {
  return {
    dataActions: bindActionCreators(actions, dispatch)
  }
}

class PollerComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    this.interval = this.props.settings.interval;
    //if(!!this.props.interval)
      //this.interval = parseInt(this.props.interval);
    clearTimeout(this.timeout);
    if (!nextProps.isFetching) {
      this.startPoll();
    }
  }

  componentWillMount() {
    this.props.dataActions.fetchData();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  startPoll() {
    this.timeout = setTimeout(() => {
      this.props.dataActions.fetchData()}, this.interval);
  }

  render() {
    return false;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollerComponent)
