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
    this.interval = this.props.settings.interval;
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
    if(this.interval >= 200){
      this.timeout = setTimeout(() => {
        this.props.dataActions.fetchData()}, this.interval);
    }
  }

  render() {
    return false;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollerComponent)
