import uuid from 'uuid';
export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
    const band = {
      name: action.name,
      id: uuid()
    }
    return {bands: state.bands.concat(band)}
    case "DELETE_BAND":
      return {...state, bands: state.bands.filter(band => band.id !== action.payload) }
    default:
      return state
  
  }
};
