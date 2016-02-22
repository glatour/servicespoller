export const SETTINGS_TOGGLE = 'SETTINGS_TOGGLE'
export function toggleSettingsVisibility() {
  return {
    type: SETTINGS_TOGGLE
  }
}

export const SETTINGS_SET_INTERVAL = 'SETTINGS_SET_INTERVAL'
export function setInterval(interval) {
  return {
    type: SETTINGS_SET_INTERVAL,
    interval: interval
  }
}
