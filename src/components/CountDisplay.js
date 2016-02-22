import React from 'react';
import {connect} from 'react-redux';

class CountDisplay extends React.Component {
  constructor() {
    super()
  }
  render () {
    const count = this.props.count
    return (<div>
      allo #{count}
      </div>);
  }
}

CountDisplay.defaultProps = {};

export default connect(state => state)(CountDisplay)
