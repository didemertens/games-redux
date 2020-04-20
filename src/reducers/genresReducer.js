export default (state = [], action) => {
  switch(action.type) {
    case 'GET_GENRES':
      return action.payload
    default:
      return state
  }
}