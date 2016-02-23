import React from 'react'
import {connect} from 'react-redux'
import {toggleSettingsVisibility, setInterval} from '../actions/settings'

var classNames = require('classnames');

const mapStateToProps = (state) => state.settings
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSettingsVisibility: function(){
      dispatch(toggleSettingsVisibility())
    },
    setInterval: function(interval){
      dispatch(setInterval(interval))
    }
  }
}
// let yeomanImage = require('../images/settings.svg');
let settingsIcon = require('../images/settings.svg')
class Settings extends React.Component {

  render() {
    let {openState, interval, toggleSettingsVisibility, setInterval} = this.props
    let toggleSettings = (e) => {
      toggleSettingsVisibility()
    }

    let panelClass = classNames({
      'settings': true,
      'settings-open': openState
    });

    const handleIntervalChange = (e) => setInterval(e.target.value)

    return (<div className={ panelClass }>
              <div className="settings-icon">
                <div className="settings-icon-content" onClick={ toggleSettings }>
                  <img src={ settingsIcon } />
                </div>
                  <div className="settings-icon-fill">
                  </div>
              </div>
              <div className="settings-content">

                <label  htmlFor="intervalInput">interval</label>
                <input  type="text"
                        id="intervalInput"
                        value={ interval }
                        onChange={ handleIntervalChange } />

                <label htmlFor="modeInput">Mode</label>
                <select id="modeInput" disabled>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
            </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
