import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/count';

class Counter extends React.Component {
  render() {
    const { someValue, onIncrement } = this.props;
    return (<div><div><button onClick={onIncrement}>+</button></div></div>)
  }
}

Counter.PropTypes =  {
  someValue: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { state: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (id) => {
      dispatch(increment())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
