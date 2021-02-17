
export function changeSatellite (state, payload) {
  state.satellite = payload
  if (state.satellite === true) {
    state.style = 'mapbox://styles/mapbox/satellite-streets-v11'
  } else {
    state.style = 'mapbox://styles/mapbox/streets-v11'
  }
}
